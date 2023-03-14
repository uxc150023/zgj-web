export const contactUnit = {
  "widgetList": [
    {
      "key": 63591,
      "type": "vf-dialog",
      "category": "container",
      "icon": "vf-dialog",
      "widgetList": [
        {
          "key": 54507,
          "type": "table",
          "category": "container",
          "icon": "table",
          "rows": [
            {
              "cols": [
                {
                  "type": "table-cell",
                  "category": "container",
                  "icon": "table-cell",
                  "internal": true,
                  "widgetList": [
                    {
                      "key": 78269,
                      "type": "input",
                      "alias": "",
                      "icon": "text-field",
                      "formItemFlag": true,
                      "options": {
                        "name": "input89602",
                        "label": "input",
                        "labelAlign": "",
                        "type": "text",
                        "defaultValue": "",
                        "placeholder": "单位编码/单位名称/联系人",
                        "columnWidth": "200px",
                        "size": "",
                        "labelWidth": null,
                        "labelHidden": true,
                        "readonly": false,
                        "disabled": false,
                        "hidden": false,
                        "clearable": true,
                        "showPassword": false,
                        "required": false,
                        "requiredHint": "",
                        "validation": "",
                        "validationHint": "",
                        "customClass": [],
                        "labelIconClass": null,
                        "labelIconPosition": "rear",
                        "labelTooltip": null,
                        "minLength": null,
                        "maxLength": null,
                        "showWordLimit": false,
                        "prefixIcon": "",
                        "suffixIcon": "",
                        "appendButton": true,
                        "appendButtonDisabled": false,
                        "buttonIcon": "custom-search",
                        "onCreated": "",
                        "onMounted": "",
                        "onInput": "",
                        "onChange": "",
                        "onFocus": "",
                        "onBlur": "",
                        "onValidate": "",
                        "onAppendButtonClick": ""
                      },
                      "id": "input89602"
                    }
                  ],
                  "merged": false,
                  "options": {
                    "name": "table-cell-5121",
                    "cellWidth": "",
                    "cellHeight": "",
                    "colspan": 1,
                    "rowspan": 1,
                    "customClass": []
                  },
                  "id": "table-cell-5121"
                },
                {
                  "type": "table-cell",
                  "category": "container",
                  "icon": "table-cell",
                  "internal": true,
                  "widgetList": [],
                  "merged": false,
                  "options": {
                    "name": "table-cell-48501",
                    "cellWidth": "",
                    "cellHeight": "",
                    "colspan": 1,
                    "rowspan": 1,
                    "customClass": []
                  },
                  "id": "table-cell-48501"
                },
                {
                  "type": "table-cell",
                  "category": "container",
                  "icon": "table-cell",
                  "internal": true,
                  "widgetList": [],
                  "merged": false,
                  "options": {
                    "name": "table-cell-107307",
                    "cellWidth": "",
                    "cellHeight": "",
                    "colspan": 1,
                    "rowspan": 1,
                    "customClass": []
                  },
                  "id": "table-cell-107307"
                },
                {
                  "type": "table-cell",
                  "category": "container",
                  "icon": "table-cell",
                  "internal": true,
                  "widgetList": [
                    {
                      "key": 54507,
                      "type": "table",
                      "category": "container",
                      "icon": "table",
                      "rows": [
                        {
                          "cols": [
                            {
                              "type": "table-cell",
                              "category": "container",
                              "icon": "table-cell",
                              "internal": true,
                              "widgetList": [],
                              "merged": false,
                              "options": {
                                "name": "table-cell-31532",
                                "cellWidth": "",
                                "cellHeight": "",
                                "colspan": 1,
                                "rowspan": 1,
                                "customClass": []
                              },
                              "id": "table-cell-31532"
                            },
                            {
                              "type": "table-cell",
                              "category": "container",
                              "icon": "table-cell",
                              "internal": true,
                              "widgetList": [
                                {
                                  "key": 34496,
                                  "type": "button",
                                  "icon": "button",
                                  "formItemFlag": false,
                                  "options": {
                                    "name": "button93381",
                                    "label": "提交",
                                    "columnWidth": "200px",
                                    "size": "",
                                    "displayStyle": "block",
                                    "disabled": false,
                                    "hidden": false,
                                    "type": "",
                                    "plain": false,
                                    "round": false,
                                    "circle": false,
                                    "icon": null,
                                    "customClass": [],
                                    "onCreated": "",
                                    "onMounted": "",
                                    "onClick": "let selectData = this.getWidgetRef(\"datatable76384\").getSelectedRow()\ndebugger"
                                  },
                                  "id": "button93381"
                                }
                              ],
                              "merged": false,
                              "options": {
                                "name": "table-cell-68671",
                                "cellWidth": "",
                                "cellHeight": "",
                                "colspan": 1,
                                "rowspan": 1,
                                "customClass": ""
                              },
                              "id": "table-cell-68671"
                            },
                            {
                              "type": "table-cell",
                              "category": "container",
                              "icon": "table-cell",
                              "internal": true,
                              "widgetList": [
                                {
                                  "key": 34496,
                                  "type": "button",
                                  "icon": "button",
                                  "formItemFlag": false,
                                  "options": {
                                    "name": "button61814",
                                    "label": "新增+",
                                    "columnWidth": "200px",
                                    "size": "",
                                    "displayStyle": "block",
                                    "disabled": false,
                                    "hidden": false,
                                    "type": "",
                                    "plain": false,
                                    "round": false,
                                    "circle": false,
                                    "icon": null,
                                    "customClass": [],
                                    "onCreated": "",
                                    "onMounted": "",
                                    "onClick": "\nthis.getFormRef().showDialog(\"vfdialog66946\")\nthis.$nextTick(() => {\n  debugger\n  // let fomrRef = this.getWidgetRef(\"vfdialog66946\").getFormRef()\n  this.getFormRef().findWidgetAndSetDisabled(\"unitCode\",false)  \n})\n\n\n"
                                  },
                                  "id": "button61814"
                                }
                              ],
                              "merged": false,
                              "options": {
                                "name": "table-cell-43232",
                                "cellWidth": "",
                                "cellHeight": "",
                                "colspan": 1,
                                "rowspan": 1,
                                "customClass": []
                              },
                              "id": "table-cell-43232"
                            }
                          ],
                          "id": "table-row-20713",
                          "merged": false
                        }
                      ],
                      "options": {
                        "name": "table36769",
                        "hidden": false,
                        "customClass": ""
                      },
                      "id": "table36769"
                    }
                  ],
                  "merged": false,
                  "options": {
                    "name": "table-cell-110102",
                    "cellWidth": "",
                    "cellHeight": "",
                    "colspan": 1,
                    "rowspan": 1,
                    "customClass": []
                  },
                  "id": "table-cell-110102"
                }
              ],
              "id": "table-row-26750",
              "merged": false
            }
          ],
          "options": {
            "name": "table87566",
            "hidden": false,
            "customClass": []
          },
          "id": "table87566"
        },
        {
          "key": 36592,
          "type": "data-table",
          "category": "container",
          "icon": "data-table",
          "widgetList": [],
          "options": {
            "name": "datatable76384",
            "label": "data-table",
            "hidden": false,
            "rowSpacing": 8,
            "tableHeight": "300px",
            "tableWidth": "100%",
            "customClass": [],
            "stripe": true,
            "showIndex": false,
            "showCheckBox": true,
            "showPagination": true,
            "smallPagination": false,
            "showSummary": false,
            "border": true,
            "tableSize": "default",
            "tableColumns": [
              {
                "columnId": 1673271361539,
                "show": false,
                "prop": "id",
                "label": "ID",
                "width": "100"
              },
              {
                "columnId": 1,
                "prop": "unitCode",
                "label": "单位编码",
                "width": "200",
                "show": true,
                "align": "left",
                "fixed": "",
                "sortable": false
              },
              {
                "columnId": 2,
                "prop": "unitName",
                "label": "单位名称",
                "width": "200",
                "show": true,
                "align": "left",
                "formatS": ""
              },
              {
                "columnId": 3,
                "prop": "dept",
                "label": "所属部门",
                "width": "160",
                "show": true,
                "align": "left",
                "formatS": ""
              },
              {
                "columnId": 1673272653092,
                "show": false,
                "label": "联系人",
                "prop": "contacts",
                "align": "left"
              },
              {
                "columnId": 1673272658576,
                "show": false,
                "label": "联系方式",
                "prop": "contactWay",
                "align": "left"
              },
              {
                "columnId": 1673272659610,
                "show": false,
                "label": "备注",
                "prop": "remark",
                "align": "left"
              }
            ],
            "showButtonsColumn": true,
            "buttonsColumnFixed": "right",
            "buttonsColumnTitle": "操作",
            "buttonsColumnWidth": 160,
            "operationButtons": [
              {
                "name": "detail",
                "label": "详情",
                "type": "text",
                "size": "small",
                "round": false,
                "hidden": true,
                "disabled": false
              },
              {
                "name": "edit",
                "label": "修改",
                "type": "text",
                "size": "small",
                "round": false,
                "hidden": false,
                "disabled": false
              },
              {
                "name": "delete",
                "label": "删除",
                "type": "text",
                "size": "small",
                "round": false,
                "hidden": false,
                "disabled": false
              }
            ],
            "pagination": {
              "currentPage": 1,
              "pageSizes": [
                10,
                15,
                20,
                30,
                50,
                100,
                200
              ],
              "pageSize": 20,
              "total": 366
            },
            "dsEnabled": false,
            "dsName": "",
            "dataSetName": "",
            "treeDataEnabled": false,
            "rowKey": "id",
            "childrenKey": "children",
            "tableData": [
              {
                "id": "1",
                "unitCode": "20230109190437875419",
                "unitName": "m z",
                "dept": "默认部门",
                "contacts": "m z",
                "contactWay": "m z",
                "remark": "m z"
              },
              {
                "id": "2",
                "unitCode": "20230109190316143246",
                "unitName": "张敏",
                "dept": "默认部门",
                "contacts": "张敏",
                "contactWay": "张敏",
                "remark": "张敏"
              }
            ],
            "onCreated": "",
            "onMounted": "",
            "onPageSizeChange": "",
            "onCurrentPageChange": "",
            "onSelectionChange": "",
            "onHideOperationButton": "",
            "onDisableOperationButton": "",
            "onGetOperationButtonLabel": "",
            "onOperationButtonClick": "if(buttonName == \"edit\"){\n  let sendData = {\n    unitCode:row.unitCode,\n    unitName:row.unitName,\n    contacts:row.contacts,\n    contactWay:row.contactWay,\n    remark:row.remark,\n  }\n  this.getFormRef().showDialog(\"vfdialog66946\",sendData)  \n  // this.$nextTick(() => {\n  //   this.getFormRef().setFieldValue(\"unitCode\",row.unitCode)\n  //   this.getFormRef().setFieldValue(\"unitName\",row.unitName)\n  //   this.getFormRef().setFieldValue(\"contacts\",row.contacts)\n  //   this.getFormRef().setFieldValue(\"contactWay\",row.contactWay)\n  //   this.getFormRef().setFieldValue(\"remark\",row.remark)\n  //   this.getFormRef().findWidgetAndSetDisabled(\"unitCode\",true)  \n  // })\n  \n}\n",
            "onHeaderClick": "",
            "onRowClick": "",
            "onRowDoubleClick": "",
            "onCellClick": "",
            "onCellDoubleClick": "",
            "onGetRowClassName": "",
            "onGetSpanMethod": ""
          },
          "id": "datatable76384"
        }
      ],
      "options": {
        "name": "vfdialog67124",
        "title": "选择往来单位",
        "width": "50%",
        "fullscreen": false,
        "showModal": true,
        "showClose": true,
        "closeOnClickModal": false,
        "closeOnPressEscape": false,
        "center": false,
        "readMode": false,
        "disabledMode": false,
        "okButtonLabel": "",
        "okButtonHidden": false,
        "cancelButtonLabel": "",
        "cancelButtonHidden": false,
        "onOkButtonClick": "",
        "onCancelButtonClick": "",
        "onDialogOpened": "",
        "onDialogBeforeClose": ""
      },
      "id": "vfdialog67124"
    },
    {
      "key": 87145,
      "type": "vf-dialog",
      "category": "container",
      "icon": "vf-dialog",
      "widgetList": [
        {
          "key": 72110,
          "type": "input",
          "alias": "",
          "icon": "text-field",
          "formItemFlag": true,
          "options": {
            "name": "unitCode",
            "label": "单位编码",
            "labelAlign": "",
            "type": "text",
            "defaultValue": "",
            "placeholder": "",
            "columnWidth": "200px",
            "size": "",
            "labelWidth": null,
            "labelHidden": false,
            "readonly": false,
            "disabled": true,
            "hidden": false,
            "clearable": true,
            "showPassword": false,
            "required": false,
            "requiredHint": "",
            "validation": "",
            "validationHint": "",
            "customClass": [],
            "labelIconClass": null,
            "labelIconPosition": "rear",
            "labelTooltip": null,
            "minLength": null,
            "maxLength": null,
            "showWordLimit": false,
            "prefixIcon": "",
            "suffixIcon": "",
            "appendButton": false,
            "appendButtonDisabled": false,
            "buttonIcon": "custom-search",
            "onCreated": "",
            "onMounted": "",
            "onInput": "",
            "onChange": "",
            "onFocus": "",
            "onBlur": "",
            "onValidate": "",
            "onAppendButtonClick": ""
          },
          "id": "input42964"
        },
        {
          "key": 72110,
          "type": "input",
          "alias": "",
          "icon": "text-field",
          "formItemFlag": true,
          "options": {
            "name": "unitName",
            "label": "单位名称",
            "labelAlign": "",
            "type": "text",
            "defaultValue": "",
            "placeholder": "",
            "columnWidth": "200px",
            "size": "",
            "labelWidth": null,
            "labelHidden": false,
            "readonly": false,
            "disabled": false,
            "hidden": false,
            "clearable": true,
            "showPassword": false,
            "required": false,
            "requiredHint": "",
            "validation": "",
            "validationHint": "",
            "customClass": [],
            "labelIconClass": null,
            "labelIconPosition": "rear",
            "labelTooltip": null,
            "minLength": null,
            "maxLength": null,
            "showWordLimit": false,
            "prefixIcon": "",
            "suffixIcon": "",
            "appendButton": false,
            "appendButtonDisabled": false,
            "buttonIcon": "custom-search",
            "onCreated": "",
            "onMounted": "",
            "onInput": "",
            "onChange": "",
            "onFocus": "",
            "onBlur": "",
            "onValidate": "",
            "onAppendButtonClick": ""
          },
          "id": "input71607"
        },
        {
          "key": 72110,
          "type": "input",
          "alias": "",
          "icon": "text-field",
          "formItemFlag": true,
          "options": {
            "name": "contacts",
            "label": "联系人",
            "labelAlign": "",
            "type": "text",
            "defaultValue": "",
            "placeholder": "",
            "columnWidth": "200px",
            "size": "",
            "labelWidth": null,
            "labelHidden": false,
            "readonly": false,
            "disabled": false,
            "hidden": false,
            "clearable": true,
            "showPassword": false,
            "required": false,
            "requiredHint": "",
            "validation": "",
            "validationHint": "",
            "customClass": "",
            "labelIconClass": null,
            "labelIconPosition": "rear",
            "labelTooltip": null,
            "minLength": null,
            "maxLength": null,
            "showWordLimit": false,
            "prefixIcon": "",
            "suffixIcon": "",
            "appendButton": false,
            "appendButtonDisabled": false,
            "buttonIcon": "custom-search",
            "onCreated": "",
            "onMounted": "",
            "onInput": "",
            "onChange": "",
            "onFocus": "",
            "onBlur": "",
            "onValidate": "",
            "onAppendButtonClick": ""
          },
          "id": "input27732"
        },
        {
          "key": 72110,
          "type": "input",
          "alias": "",
          "icon": "text-field",
          "formItemFlag": true,
          "options": {
            "name": "contactWay",
            "label": "联系方式",
            "labelAlign": "",
            "type": "text",
            "defaultValue": "",
            "placeholder": "",
            "columnWidth": "200px",
            "size": "",
            "labelWidth": null,
            "labelHidden": false,
            "readonly": false,
            "disabled": false,
            "hidden": false,
            "clearable": true,
            "showPassword": false,
            "required": false,
            "requiredHint": "",
            "validation": "",
            "validationHint": "",
            "customClass": [],
            "labelIconClass": null,
            "labelIconPosition": "rear",
            "labelTooltip": null,
            "minLength": null,
            "maxLength": null,
            "showWordLimit": false,
            "prefixIcon": "",
            "suffixIcon": "",
            "appendButton": false,
            "appendButtonDisabled": false,
            "buttonIcon": "custom-search",
            "onCreated": "",
            "onMounted": "",
            "onInput": "",
            "onChange": "",
            "onFocus": "",
            "onBlur": "",
            "onValidate": "",
            "onAppendButtonClick": ""
          },
          "id": "input35311"
        },
        {
          "key": 72694,
          "type": "textarea",
          "icon": "textarea-field",
          "formItemFlag": true,
          "options": {
            "name": "remark",
            "label": "备注",
            "labelAlign": "",
            "rows": 3,
            "defaultValue": "",
            "placeholder": "",
            "columnWidth": "200px",
            "size": "",
            "labelWidth": null,
            "labelHidden": false,
            "readonly": false,
            "disabled": false,
            "hidden": false,
            "required": false,
            "requiredHint": "",
            "validation": "",
            "validationHint": "",
            "customClass": [],
            "labelIconClass": null,
            "labelIconPosition": "rear",
            "labelTooltip": null,
            "minLength": null,
            "maxLength": null,
            "showWordLimit": false,
            "onCreated": "",
            "onMounted": "",
            "onInput": "",
            "onChange": "",
            "onFocus": "",
            "onBlur": "",
            "onValidate": ""
          },
          "id": "textarea49314"
        }
      ],
      "options": {
        "name": "vfdialog66946",
        "title": "单位信息",
        "width": "50%",
        "fullscreen": false,
        "showModal": true,
        "showClose": true,
        "closeOnClickModal": false,
        "closeOnPressEscape": false,
        "center": false,
        "readMode": false,
        "disabledMode": false,
        "okButtonLabel": "",
        "okButtonHidden": false,
        "cancelButtonLabel": "",
        "cancelButtonHidden": false,
        "onOkButtonClick": "",
        "onCancelButtonClick": "",
        "onDialogOpened": "",
        "onDialogBeforeClose": ""
      },
      "id": "vfdialog66946"
    },
    {
      "key": 72110,
      "type": "input",
      "alias": "",
      "icon": "text-field",
      "formItemFlag": true,
      "options": {
        "name": "input58491",
        "label": "往来单位",
        "labelAlign": "",
        "type": "text",
        "defaultValue": "",
        "placeholder": "",
        "columnWidth": "200px",
        "size": "",
        "labelWidth": null,
        "labelHidden": false,
        "readonly": true,
        "disabled": false,
        "hidden": false,
        "clearable": true,
        "showPassword": false,
        "required": false,
        "requiredHint": "",
        "validation": "",
        "validationHint": "",
        "customClass": [],
        "labelIconClass": null,
        "labelIconPosition": "rear",
        "labelTooltip": null,
        "minLength": null,
        "maxLength": null,
        "showWordLimit": false,
        "prefixIcon": "",
        "suffixIcon": "",
        "appendButton": true,
        "appendButtonDisabled": false,
        "buttonIcon": "custom-search",
        "onCreated": "",
        "onMounted": "",
        "onInput": "",
        "onChange": "",
        "onFocus": "",
        "onBlur": "",
        "onValidate": "",
        "onAppendButtonClick": "this.getFormRef().showDialog(\"vfdialog67124\")"
      },
      "id": "input58491"
    }
  ],
  "formConfig": {
    "modelName": "formData",
    "refName": "vForm",
    "rulesName": "rules",
    "labelWidth": 80,
    "labelPosition": "left",
    "size": "",
    "labelAlign": "label-right-align",
    "cssCode": "",
    "customClass": [],
    "functions": "",
    "layoutType": "PC",
    "jsonVersion": 3,
    "dataSources": [],
    "onFormCreated": "",
    "onFormMounted": "",
    "onFormDataChange": "",
    "tableBorder": false,
    "onFormValidate": ""
  }
}