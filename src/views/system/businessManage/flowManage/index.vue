<!--
* @Descripttion 流程管理
* @FileName index.vue
* @Author WalterXsk
* @LastEditTime 2023-03-20 16:37:56
!-->
<template>
  <div class="flowManage-index">
    <JyTable
      url="/flow/page"
      ref="table"
      :hasTree="true"
      :needAutoRequest="false"
      :componentsSearchForm="state.componentsSearchForm"
      :componentsTableHeader="state.componentsTable.header"
      :componentsBatch="state.componentsBatch"
      :queryParams="queryParams"
      statusColoum="flag"
      tableClick="flowName"
      openValue="1"
      :isNo="false"
      @cellClick="cellClick"
      @customClick="customClick"
      @clickBatchButton="batchOpt"
    >
      <template #title>
        <div class="title">
          <div>{{ $t('t-zgj-cg-menu-liucheng-guanli') }}</div>
          <div class="title-more">
            <div class="title-more-add">
              <el-button type="primary" @click="openAddFlow">
                + {{ $t('t-zgj-sync.add') }}
              </el-button>
            </div>
            <div class="title-more-down"> </div>
          </div>
        </div>
      </template>
      <template #tree>
        <div>
          <componentsTree
            ref="tree"
            v-model="state.componentsTree.value"
            :data="state.componentsTree.data"
            :defaultAttribute="state.componentsTree.defaultAttribute"
            :defaultProps="state.componentsTree.defaultProps"
            @current-change="currentChange"
            v-if="state.componentsTree.value"
          >
          </componentsTree>
        </div>
      </template>
    </JyTable>

    <!-- 流程详情 -->
    <JyDetailDrawer
      v-model="detailDrawerShow"
      modulesName="system_flow_management"
      :detailParams="detailParams"
      :importParams="importParams"
    ></JyDetailDrawer>

    <!-- 新建弹框 -->
    <Addflow
      v-if="addFlowModalShow"
      v-model="addFlowModalShow"
      :openType="openType"
      :sealApplyInitId="sealApplyInitId"
      :editModleIds="editModleIds"
      :treeSelectedId="state.componentsTree.value"
      @update:treeSelectedId="state.componentsTree.value = $event"
      :businessList="state.componentsTree.data"
      @reloadData="reloadData"
    ></Addflow>
    <!-- 弹窗提示 -->
    <JyElMessageBox
      v-model="state.MessageBox.show"
      :show="state.MessageBox.show"
      :defaultAttribute="{}"
    >
      <template #header>
        <div class="header-div">
          <img :src="state.MessageBox.header.icon" alt="" />
          <span>{{ state.MessageBox.header.data }}</span>
        </div>
      </template>
      <template #content>
        <div class="content-div">{{ state.MessageBox.content.data }}</div>
      </template>
      <template #footer>
        <el-button
          type="primary"
          @click="submitElMessageBox(state.MessageBox.type)"
        >
          确认
        </el-button>
        <el-button @click="state.MessageBox.show = false">取消</el-button>
      </template>
    </JyElMessageBox>
    <!-- 批量操作弹框提示 -->
    <JyElMessageBox
      v-model="state.showToastDialog.show"
      :show="state.showToastDialog.show"
      :defaultAttribute="{}"
    >
      <template #header>
        <div class="header-div">
          <img :src="state.showToastDialog.header.icon" alt="" />
          <span>{{ state.showToastDialog.header.data }}</span>
        </div>
      </template>
      <template #content>
        <div class="content-div">{{ state.showToastDialog.content.data }}</div>
        <el-scrollbar class="scrollbar" max-height="200px">
          <div
            v-for="item in state.batchColumnData"
            :key="item"
            class="scrollbar-demo-item"
            >{{ item }}
          </div>
        </el-scrollbar>
      </template>
      <template #footer>
        <el-button
          v-for="item in state.componentsBatch.butDatas"
          :key="item.name"
          :type="item.type"
          @click="item.clickName"
          >{{ item.name }}
        </el-button>
      </template>
    </JyElMessageBox>
  </div>
</template>

<script setup>
  /**
   * openType edit、add
   */
  import { reactive, onBeforeMount, ref } from 'vue'
  import componentsTree from '@/views/components/tree'
  import Addflow from './AddOrEditFlow.vue'
  import apiFlow from '@/api/system/flowManagement'
  import apiForm from '@/api/system/formManagement'
  import JyTable from '@/views/components/JyTable.vue'
  import { ElMessage } from 'element-plus'
  import tableHeaderSealApply from '@/views/tableHeaderJson/system/companyManage/departmentStaff/flowSealApply.json'
  import tableHeaderSeal from '@/views/tableHeaderJson/system/companyManage/departmentStaff/flowSeal.json'
  import JyDetailDrawer from '@/views/components/drawerDetails/index.vue'

  const detailDrawerShow = ref(false)
  const detailParams = ref([])
  const importParams = ref({
    modelId: '',
    definitionId: ''
  })
  const addFlowModalShow = ref(false)
  const openType = ref(null)
  const tree = ref(null)
  const editModleIds = ref({
    flowMessageId: '',
    modelId: '',
    definitionId: ''
  })
  const openAddFlow = () => {
    addFlowModalShow.value = true
    openType.value = 'add'
  }

  const table = ref(null)
  const queryParams = ref({})
  // 用印申请id
  const sealApplyInitId = ref('')

  const sealApplySearchForm = [
    {
      id: 'keyword',
      label: '关键词',
      type: 'input',
      inCommonUse: true,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '表单名称/创建人'
      }
    },
    {
      id: 'status',
      label: '状态',
      type: 'select',
      optionLabel: 'label',
      optionValue: 'value',
      inCommonUse: true,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择'
      },
      options: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '停用'
        }
      ]
    },
    {
      id: 'updateTime',
      label: '更新时间',
      type: 'picker',
      requestType: 'array',
      startRequest: 'updateStartTime',
      endRequest: 'updateEndTime',
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        type: 'daterange',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        'value-format': 'YYYY-MM-DD',
        'disabled-date': time => {
          return time.getTime() > Date.now() // 如果有后面的-8.64e7就是不可以选择今天的
        },
        'default-value': [
          new Date(new Date().setMonth(new Date().getMonth() - 1)),
          new Date()
        ]
      },
      style: {}
    },
    {
      id: 'fileTypeId',
      requestParams: 'fileTypeId',
      label: '文件类型',
      type: 'derivable',
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择',
        type: 'fileType',
        multiple: false,
        joinStr: ','
      },
      options: []
    },
    {
      id: 'sealUseTypeId',
      label: '用印类型',
      type: 'select',
      optionLabel: 'label',
      optionValue: 'value',
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择'
      },
      options: [
        {
          value: '1',
          label: '物理用印'
        },
        {
          value: '2',
          label: '电子签章'
        }
      ]
    },
    {
      id: 'formMessageId',
      label: '关联表单',
      type: 'select',
      optionLabel: 'formName',
      optionValue: 'formMessageId',
      filterable: true,
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择'
      },
      requestObj: {
        method: 'GET',
        url: '/form/list',
        type: 'flow'
      }
    }
  ]

  const noSealApplySearchForm = [
    {
      id: 'keyword',
      label: '关键词',
      type: 'input',
      inCommonUse: true,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '表单名称/创建人'
      }
    },
    {
      id: 'status',
      label: '状态',
      type: 'select',
      optionLabel: 'label',
      optionValue: 'value',
      inCommonUse: true,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择'
      },
      options: [
        {
          value: '1',
          label: '启用'
        },
        {
          value: '0',
          label: '停用'
        }
      ]
    },
    {
      id: 'updateTime',
      label: '更新时间',
      type: 'picker',
      requestType: 'array',
      startRequest: 'updateStartTime',
      endRequest: 'updateEndTime',
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        type: 'daterange',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间',
        'value-format': 'YYYY-MM-DD',
        'disabled-date': time => {
          return time.getTime() > Date.now() // 如果有后面的-8.64e7就是不可以选择今天的
        },
        'default-value': [
          new Date(new Date().setMonth(new Date().getMonth() - 1)),
          new Date()
        ]
      },
      style: {}
    },
    {
      id: 'formMessageId',
      label: '关联表单',
      type: 'select',
      optionLabel: 'formName',
      optionValue: 'formMessageId',
      filterable: true,
      inCommonUse: false,
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        placeholder: '请选择'
      },
      requestObj: {
        method: 'GET',
        url: '/form/list',
        type: 'flow'
      }
    }
  ]

  const state = reactive({
    flowMessageId: '',
    columnData: {},
    batchColumnData: [],
    MessageBox: {
      show: false,
      header: {
        data: '',
        icon: '/src/assets/svg/common/warning.svg'
      },
      content: {
        data: ''
      },
      type: '删除'
    },
    showToastDialog: {
      show: false,
      header: {
        data: '',
        icon: '/src/assets/svg/common/warning.svg'
      },
      content: {
        data: ''
      },
      type: '删除'
    },
    componentsSearchForm: {
      style: {
        lineStyle: {
          width: '30%'
        },
        labelStyle: {
          width: '100px'
        }
      },

      data: sealApplySearchForm,

      butData: [
        {
          id: 'more',
          name: '展开',
          type: 'unfold',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'primary'
          },
          style: {}
        },
        {
          id: 'inquire',
          name: '查询',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {
            type: 'primary'
          },
          style: {}
        },
        {
          id: 'reset',
          name: '重置',
          type: 'click',
          // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
          defaultAttribute: {},
          style: {}
        }
      ]
    },

    componentsTable: {
      header: tableHeaderSealApply,
      data: [],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        stripe: true,
        'header-cell-style': {
          background: 'var(--jy-color-fill--3)'
        },
        'cell-style': ({ row, column, rowIndex, columnIndex }) => {
          if (column.property === 'flowName') {
            return {
              color: 'var(--jy-info-6)',
              cursor: 'pointer'
            }
          }
        }
      }
    },

    componentsPagination: {
      data: {
        amount: 0,
        index: 1,
        pageNumber: 10
      },
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        layout: 'prev, pager, next, jumper',
        total: 0,
        'page-sizes': [10, 100, 200, 300, 400],
        background: true
      }
    },

    componentsTree: {
      data: [],
      // 默认属性  可以直接通过默认属性  来绑定组件自带的属性
      defaultAttribute: {
        'check-on-click-node': true,
        'show-checkbox': false,
        'default-expand-all': true,
        'expand-on-click-node': false,
        'check-strictly': true,
        'highlight-current': true,
        'node-key': 'applyTypeId',
        'current-node-key': '2'
      },
      defaultProps: {
        label: 'applyTypeName',
        children: 'children'
      },
      value: ''
    },

    componentsBatch: {
      selectionData: [],
      defaultAttribute: {
        disabled: true
      },
      data: [
        {
          name: '批量删除'
        },
        {
          name: '批量启用'
        },
        {
          name: '批量停用'
        }
      ],
      butDatas: [
        {
          name: '知道了',
          type: '',
          clickName: closeBatchTabel
        }
      ]
    }
  })

  // 点击表格单元格
  const cellClick = (row, column, cell, event) => {
    if (column.property === 'flowName') {
      detailDrawerShow.value = true
      importParams.value = {
        modelId: row.modelId,
        definitionId: row.definitionId
      }
      detailParams.value = [
        {
          value: 'detail',
          params: {
            flowMessageId: row.flowMessageId
          }
        },
        {
          value: 'record',
          params: {
            operationId: row.flowMessageId // 传参
          }
        },
        {
          value: 'version',
          params: {
            flowMessageId: row.flowMessageId
          }
        }
      ]
    }
  }

  const customClick = (row, column, cell, event) => {
    state.columnData = column
    state.flowMessageId = column.flowMessageId
    state.title = cell.name
    if (cell.name === 't-zgj-qyWechat.Copy') {
      ElMessage.warning(`功能暂未实现，敬请期待`)
    }
    // showLibraryDialog.value = true
    if (cell.name === 't-zgj-Edit') {
      if (column.flag === '1') {
        ElMessage.warning('请将流程停用后再进行修改')
      } else {
        addFlowModalShow.value = true
        openType.value = 'edit'
        editModleIds.value.flowMessageId = column.flowMessageId
        editModleIds.value.definitionId = column.definitionId
        editModleIds.value.modelId = column.modelId
      }
    }
    if (cell.name === 't-zgj-Delete') {
      state.MessageBox.header.data = '提示'
      state.MessageBox.content.data = '确认要删除流程吗？'
      state.MessageBox.show = true
      state.MessageBox.type = '删除'
    }
    if (cell.name === 'status' && column.flag === '1') {
      state.MessageBox.header.data = '停用'
      state.MessageBox.content.data = '请问确定停用该流程吗？'
      state.MessageBox.show = true
      state.MessageBox.type = '停用'
    }
    if (cell.name === 'status' && column.flag === '0') {
      state.MessageBox.header.data = '启用'
      state.MessageBox.content.data = '请问确定启用该流程吗？'
      state.MessageBox.show = true
      state.MessageBox.type = '启用'
    }
  }

  // 关闭表单复制弹窗
  function closeBatchTabel() {
    state.showToastDialog.show = false
  }

  // 提交弹窗
  const submitElMessageBox = type => {
    if (type === '取消') {
      state.MessageBox.show = false
    }
    if (type === '删除') {
      if (state.columnData.flag === '1') {
        state.MessageBox.show = false
        ElMessage.warning('请将流程停用后再进行删除')
        return
      }
      apiOpt(type, apiFlow.flowDelete({ flowMessageId: state.flowMessageId }))
    }
    if (type === '停用') {
      apiOpt(
        type,
        apiFlow.flowEnable({
          flowMessageId: state.flowMessageId,
          flag: '0'
        })
      )
    }
    if (type === '启用') {
      apiOpt(
        type,
        apiFlow.flowEnable({
          flowMessageId: state.flowMessageId,
          flag: '1'
        })
      )
    }
    if (type === '编辑') {
      state.MessageBox.show = true
    }
  }

  const apiOpt = (typeName, apiName) => {
    apiName.then(res => {
      if (res.code === 200) {
        ElMessage.success(`${typeName}成功！`)
      } else {
        ElMessage.success(`${typeName}失败，请重试`)
      }
      state.MessageBox.show = false
      reloadData()
    })
  }

  // 批量删除
  function batchOpt(item, selection) {
    state.batchColumnData = []
    selection.forEach(v => {
      state.batchColumnData.push(v.flowName)
    })
    state.showToastDialog.header.data = item.name
    state.showToastDialog.content.data = `已选中以下流程，请问确定要${item.name}吗？`
    state.showToastDialog.show = true
    state.showToastDialog.type = item.name
    // state.showToastDialog.header.icon = '/src/assets/svg/common/danger.svg'
    state.componentsBatch.butDatas = [
      {
        name: '确定',
        type: 'primary',
        clickName: () => {
          return sureBatchOpt(selection)
        }
      },
      {
        name: '取消',
        type: '',
        clickName: closeBatchTabel
      }
    ]
  }

  // 确定批量操作
  const sureBatchOpt = selection => {
    // const list = state.componentsBatch.selectionData
    const list = selection
    const idList = []
    switch (state.showToastDialog.type) {
      case '批量删除':
        state.batchColumnData = []
        list.forEach(v => {
          if (v.flag === '1') {
            state.batchColumnData.push(v.flowName)
          }
          idList.push(v.flowMessageId)
        })
        if (state.batchColumnData.length > 0) {
          state.showToastDialog.header.data = state.showToastDialog.type
          state.showToastDialog.content.data = `请将以下流程停用后再进行删除`
          // state.showToastDialog.header.icon = '/src/assets/svg/common/danger.svg'
          state.componentsBatch.butDatas = [
            {
              name: '知道了',
              type: 'primary',
              clickName: closeBatchTabel
            }
          ]
        } else {
          batchOptApi(
            '批量删除',
            apiFlow.batchDelete({ flowMessageIds: idList })
          )
        }
        break
      case '批量停用':
        list.forEach(v => {
          idList.push(v.flowMessageId)
        })
        batchOptApi(
          '批量停用',
          apiFlow.batachEnable({ flowMessageIds: idList, flag: '0' })
        )
        break
      case '批量启用':
        list.forEach(v => {
          idList.push(v.flowMessageId)
        })
        batchOptApi(
          '批量启用',
          apiFlow.batachEnable({ flowMessageIds: idList, flag: '1' })
        )
        break
    }
  }

  const batchOptApi = (type, apiName) => {
    apiName.then(res => {
      if (res.code === 200) {
        ElMessage.success(`${type}成功！`)
      } else {
        ElMessage.error(`${type}失败，请重试！`)
      }
      state.showToastDialog.show = false
      reloadData()
    })
  }

  // 发送api请求 查询表单树解构
  const listApplyTypeTreeApi = () => {
    apiForm.listApplyTypeTree({}).then(result => {
      const listApplyTypeTree = []
      result.data.forEach(element => {
        if (!element.applyTypePid) {
          element.children = []
          listApplyTypeTree.push(element)
        } else {
          // 获取用印申请id
          if (element.applyTypeName === '用印申请') {
            sealApplyInitId.value = element.applyTypeId
          }
          const index = listApplyTypeTree.findIndex(
            i => i.applyTypeId === element.applyTypePid
          )
          if (index > -1) {
            listApplyTypeTree[index].children.push(element)
          }
        }
      })
      state.componentsTree.data = listApplyTypeTree
      state.componentsTree.value = listApplyTypeTree[0].children[0].applyTypeId
      queryParams.value.applyTypeId = sealApplyInitId.value
      reloadData()
    })
  }

  const currentChange = (e, node) => {
    if (node.level === 1) {
      // tree.value.setCurrentKey(e.applyTypeId === '5' ? '6' : '2')
      return
    }
    queryParams.value.applyTypeId = e.applyTypeId ? e.applyTypeId : null
    state.componentsTree.value = e.applyTypeId

    // 更新列表头 和 搜索条件
    reloadSearchAndTablerHeader(e.applyTypeId)
  }
  const reloadData = () => {
    reloadSearchAndTablerHeader(state.componentsTree.value)
    table.value.reloadData()
  }

  const reloadSearchAndTablerHeader = id => {
    if (id === sealApplyInitId.value) {
      // 用印申请
      state.componentsSearchForm.data = sealApplySearchForm
      state.componentsTable.header = tableHeaderSealApply
      table.value.reloadSearchForm(sealApplySearchForm, { applyTypeId: id })
      table.value.setTableHeader(tableHeaderSealApply)
    } else {
      // 非用印申请
      state.componentsSearchForm.data = noSealApplySearchForm
      state.componentsTable.header = tableHeaderSeal
      table.value.setTableHeader(tableHeaderSeal)
      table.value.reloadSearchForm(noSealApplySearchForm, { applyTypeId: id })
    }
    table.value.reloadData()
  }
  onBeforeMount(() => {
    // 发送api请求 查询表单树解构
    listApplyTypeTreeApi()
  })
</script>

<style lang="scss" scoped>
  .flowManage-index {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title-more {
        height: 100%;
        display: flex;
        align-items: center;

        .title-more-add {
          // margin-right: 0.5rem;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .title-more-down {
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>
