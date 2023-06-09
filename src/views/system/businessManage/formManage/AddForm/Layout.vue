<template>
  <div class="layout-contanier">
    <div class="process">
      <div class="header">
        <div class="process-back">
          <i class="iconpark" @click="clickClose">
            <svg class="iconpark-icon">
              <use href="#Vector8Stroke"></use>
            </svg>
          </i>
          <slot name="backTitle">
            <span class="process-back-text">新增</span>
          </slot>
        </div>
        <div class="process-tabs">
          <div
            class="tabs"
            v-for="(item, index) in state.props.tabsData"
            :key="index"
            :class="{
              'checked-tabs': item.checked ? true : false
            }"
            @click="clickCutTabs(state.props.tabsData, item)"
          >
            <div class="tabs-icon">{{ item.index }}</div>
            <div class="tabs-text">{{ item.label }}</div>
          </div>
        </div>
        <div class="process-save">
          <slot name="subTitle">
            <el-button class="process-save-but" type="primary">
              保存
            </el-button>
          </slot>
        </div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onBeforeMount, onMounted, watch } from 'vue'
  const emit = defineEmits([
    'close',
    'update:modelValue',
    'clickCutTabs',
    'beforeCutTabs'
  ])
  const props = defineProps({
    // 处理类型
    type: {
      type: String,
      default: '0'
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    tabsData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 切换tabs之前调用函数
    beforeCutTabs: {
      type: Function,
      default: () => {
        return true
      }
    }
  })
  const state = reactive({
    props: {},
    processTabs: {
      checkedNode: {},
      data: [
        {
          index: '1',
          label: '基础信息',
          checked: true
        },
        {
          index: '2',
          label: '关联表单'
        },
        {
          index: '3',
          label: '流程设计'
        },
        {
          index: '4',
          label: '高级设置'
        }
      ]
    }
  })

  // 初始化数据
  const initProps = () => {
    const dispose = state.props
    for (const key in props) {
      if (Object.hasOwnProperty.call(dispose, key)) {
        dispose[key] = props[key]
      } else {
        dispose[key] = props[key]
      }
    }
  }
  // 点击切换选项
  const clickCutTabs = (data, item) => {
    const beforeCutTabs = state.props.beforeCutTabs(data, item)
    if (beforeCutTabs === false) {
      return
    }
    data.forEach(element => {
      element.checked = false
    })
    item.checked = true
    emit('clickCutTabs', data, item)
  }
  // 点击关闭弹框
  const clickClose = () => {
    emit('close')
  }

  watch(props, (newValue, oldValue) => {
    // 初始化数据
    initProps()
  })
  onBeforeMount(() => {
    // 初始化数据
    initProps()
  })
  onMounted(() => {})
</script>
<style lang="scss" scoped>
  .layout-contanier {
    margin: 0%;
    width: 100%;
    height: 100%;
    .process {
      width: 100%;
      height: 100%;
      .header {
        position: relative;
        z-index: 20;
        display: flex;
        height: 4rem;
        align-items: center;
        padding: 0% 1rem;
        box-sizing: border-box;
        box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
          0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
        background-color: #ffffff;
        justify-content: space-between;
        .process-back {
          color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          min-width: 110px;
          font-size: 22px;
          .iconpark {
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            align-items: center;
            margin-right: 0.5rem;
            cursor: pointer;
            .iconpark-icon {
              width: 1.2rem;
              height: 1.2rem;
            }
          }
          .process-back-text {
            font-size: 22px;
            // cursor: pointer;
          }
        }
        .process-tabs {
          display: flex;
          height: 100%;
          min-width: 600px;
          flex: 1;
          justify-content: center;
          .tabs {
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.45);
            margin: 0% 4%;
            box-sizing: border-box;
            height: 100%;
            cursor: pointer;
            border-bottom: 2px solid rgba(0, 0, 0, 0);
            .tabs-icon {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 50%;
              border: 1px solid rgba(0, 0, 0, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 0.5rem;
            }
            .tabs-text {
              font-size: 16px;
            }
          }
          .checked-tabs {
            border-bottom: 2px solid var(--jy-primary-6);
            .tabs-icon {
              background-color: var(--jy-primary-6);
              border: 1px solid var(--jy-primary-6);
              color: #ffffff;
            }
            .tabs-text {
              color: var(--jy-primary-6);
            }
          }
        }
        .process-save {
          min-width: 200px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .process-save-down {
            margin-right: 0.5rem;
            .process-save-down-text {
              color: var(--jy-danger-6);
              cursor: pointer;
            }
          }
        }
      }
      .content {
        width: 100%;
        height: calc(100% - 4rem);
        background-color: #f2f2f2;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        z-index: 0;
      }
    }
  }

  .popover-cont {
    padding: 0.5rem;
    color: var(--jy-color-text-1);
    .popover-cont-title {
      font-size: var(--jy-font-size-title-1);
    }
    .popover-cont-subTitle {
      color: var(--jy-color-text-3);
      margin-top: 0.8rem;
    }
    .popover-cont-list {
      margin-top: 0.2rem;
      .popover-cont-list-li {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.04);
        justify-content: space-between;
        padding: 0.8rem 1rem;
        margin: 0rem 0rem 0.5rem 0rem;
        .popover-cont-list-li-name {
          width: 4rem;
        }
        .popover-cont-list-li-desc {
          color: var(--jy-color-text-3);
          width: calc(100% - 7rem);
          padding: 0% 0.5rem;
        }
        .popover-cont-list-li-but {
          color: var(--jy-info-6);
          width: 3rem;
          cursor: pointer;
        }
      }
    }
  }
</style>
