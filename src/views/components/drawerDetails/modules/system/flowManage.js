/**
 * 后台 流程管理 system_flow_management SYSTEMFLOWMANAGEMENT
 */
/**
 * 各个模块常量定义
 * TABS： tabs
 * URLS： tab对应的接口
 * INFO: 基础信息label
 * TABLEHEADERS: tab 下表格的表头信息
 */
const SYSTEMFLOWMANAGEMENT = {
  TABS: [],
  URLS: [],
  INFO: [],
  TABLEHEADERS: []
}

SYSTEMFLOWMANAGEMENT.URLS = [
  {
    value: 'detail',
    urlName: 'baseInfo'
  },
  {
    value: 'version',
    urlName: 'queryHisVersion'
  },
  {
    value: 'record',
    urlName: 'viewOperation'
  }
]

SYSTEMFLOWMANAGEMENT.TABS = [
  {
    name: 't-zgj-detail-flow.Detail',
    value: 'detail',
    children: ['BaseInfo', 'FlowDetail']
  },
  {
    name: 't-zgj-detail-operation.Record',
    value: 'record',
    children: ['RecordTable']
  },
  {
    name: 't-zgj-detail-flow.Version',
    value: 'version',
    children: ['VersionTable']
  }
]

/**
 * key: [] + handleKey => 组合 name 以 逗号； key 支持多个元素 - 不同key集合
 * type + customStyle => 展示不同状态
 */
SYSTEMFLOWMANAGEMENT.INFO = [
  {
    label: '流程名称',
    key: 'flowName'
  },
  {
    label: '流程编码',
    key: 'flowNo'
  },
  {
    label: '业务类型',
    key: 'applyTypeName'
  },
  {
    label: '文件类型',
    key: ['fileTypeScope'],
    handleKey: 'fileScope'
  },
  {
    label: '流程状态',
    key: 'flag',
    type: 'status',
    customStyle: true
  },
  {
    label: '流程适用范围',
    key: ['organScope', 'organUserScope'],
    handleKey: 'flowScope'
  },
  {
    label: '创建人',
    key: 'createUserName'
  },
  {
    label: '创建时间',
    key: 'createDatetime'
  },
  {
    label: '更新时间',
    key: 'modifyDatetime'
  },
  // {
  //   label: '流程类型',
  //   key: '无字段'
  // },
  {
    label: '流程说明',
    key: 'readme'
  },
  {
    label: '关联表单',
    key: 'formMessageName'
  }
  // {
  //   label: '超时提醒',
  //   key: '无字段'
  // },
  // {
  //   label: '审批人自动去重',
  //   key: '无字段'
  // }
]

SYSTEMFLOWMANAGEMENT.TABLEHEADERS = {
  version: [
    {
      label: '版本号',
      prop: 'flowVerison'
    },
    {
      label: '版本时间',
      prop: 'modifyDatetime'
    }
  ],
  record: [
    {
      label: '操作人',
      prop: 'operationUser'
    },
    {
      label: '操作时间',
      prop: 'operationDate'
    },
    {
      label: '操作记录',
      prop: 'operationType'
    },
    {
      label: '操作说明',
      prop: 'operationTxt'
    }
  ]
}

export default SYSTEMFLOWMANAGEMENT
