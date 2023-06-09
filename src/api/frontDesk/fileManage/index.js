// api 全局配置
import request from '@/utils/request'

// 文件类型管理
export const fileManageService = {
  /**
   * 文件类型集合（树形）
   * @param {*} params {tenantId: string}
   * @returns
   */
  getTreeList: data => {
    return request({
      method: 'POST',
      url: '/fileType/treeList',
      data
    })
  },

  /**
   * 文件类型列表
   * @param {*} data {formMessageId: string, relationRule: string}
   * @returns
   */
  getFileTypeList: params => {
    return request({
      method: 'GET',
      url: `/fileType/queryList`,
      params
    })
  },
  /**
   * 文件类型列表 - 分页
   * @param {*} data {formMessageId: string, relationRule: string}
   * @returns
   */
  getFileTypeListPage: data => {
    return request({
      method: 'POST',
      url: `/fileType/page`,
      data
    })
  },

  /**
   * 新增文件类型
   * @param {*} data
   * @returns
   */
  fileTypeAdd: data => {
    return request({
      method: 'POST',
      url: `fileType/add`,
      data
    })
  },

  /**
   * 修改文件类型
   * @param {*} data
   * @returns
   */
  fileTypeEdit: data => {
    return request({
      method: 'POST',
      url: `/fileType/edit`,
      data
    })
  },

  /**
   * 删除文件类型
   * @param {*} fileTypeId
   * @returns
   */
  fileTypeDelete: fileTypeId => {
    return request({
      method: 'POST',
      url: `fileType/delete/${fileTypeId}`
    })
  },

  /**
   * 批量删除文件类型
   * @param {*} fileTypeIds
   * @returns
   */
  batchDelete: data => {
    return request({
      method: 'POST',
      url: `fileType/batchDelete`,
      data
    })
  },

  /**
   * 查看文件类型的可见范围
   * @param {*} fileTypeId
   * @returns
   */
  queryVisibleRByFileType: fileTypeId => {
    return request({
      method: 'POST',
      url: `fileType/queryVisibleRByFileType/${fileTypeId}`
    })
  },

  /**
   * 生成文件类型编码
   * @param {*} bizType
   * @returns
   */
  generateBizNo: (bizType = 1) => {
    return request({
      method: 'GET',
      url: `fileType/generateBizNo/${bizType}`
    })
  },

  /**
   * 设置可见范围
   * @param {*} bizType
   * @returns
   */
  viewRangSet: data => {
    return request({
      method: 'POST',
      url: `/fileType/viewRangSet`,
      data
    })
  },

  /**
   * 设置可见范围
   * @param {*} bizType
   * @returns
   */
  privacySet: data => {
    return request({
      method: 'POST',
      url: `/fileType/privacySet`,
      data
    })
  },

  /**
   * 查看文件类型的隐私设置
   * @param {*} bizType
   * @returns
   */
  queryPrivacyByType: fileTypeId => {
    return request({
      method: 'GET',
      url: `/fileTypePrivacyConfig/queryByType/${fileTypeId}`
    })
  },

  /**
   * 文件类型详情
   * @param {*} bizType
   * @returns
   */
  getFileTypeInfo: fileTypeId => {
    return request({
      method: 'GET',
      url: `/fileType/info/${fileTypeId}`
    })
  }
}
