<template>
  <el-dialog
    :title="options.title"
    v-model="dialogVisible"
    append-to-body
    destroy-on-close
    draggable
    :width="options.width"
    :fullscreen="options.fullscreen"
    :modal="options.showModal"
    :show-close="options.showClose"
    :close-on-click-modal="options.closeOnClickModal"
    :close-on-press-escape="options.closeOnPressEscape"
    :center="options.center"
    :before-close="handleBeforeClose"
    @close="handleCloseEvent"
    @opened="handleOpenedEvent"
  >
    <VFormRender
      ref="dFormRef"
      :form-json="formJson"
      :form-data="formData"
      :option-data="optionData"
      :global-dsv="globalDsv"
      :parent-form="parentFormRef"
      :disabled-mode="options.disabledMode"
      :dynamic-creation="true"
    >
    </VFormRender>
    <template #footer>
      <div>
        <el-button
          v-if="!options.cancelButtonHidden"
          @click="handleCancelClick"
        >
          {{ cancelBtnLabel }}</el-button
        >
        <el-button
          v-if="!options.okButtonHidden"
          type="primary"
          @click="handleOkClick"
        >
          {{ okBtnLabel }}</el-button
        >
      </div>
    </template>
  </el-dialog>
</template>

<script>
  import i18n from '@/lib/vform/utils/i18n'

  export default {
    name: 'DynamicDialog',
    mixins: [i18n],
    props: {
      options: {
        type: Object,
        default: () => ({})
      },
      formJson: {
        type: Object
      },
      formData: {
        type: Object,
        default: () => ({})
      },
      optionData: {
        // prop传入的选项数据
        type: Object,
        default: () => ({})
      },
      globalDsv: {
        // 全局数据源变量
        type: Object,
        default: () => ({})
      },
      parentFormRef: {
        type: Object,
        default: null
      },
      extraData: {
        type: Object,
        default: () => ({})
      },
      wrapperId: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        dialogVisible: false
      }
    },
    computed: {
      cancelBtnLabel() {
        return (
          this.options.cancelButtonLabel || this.i18nt('designer.hint.cancel')
        )
      },

      okBtnLabel() {
        return this.options.okButtonLabel || this.i18nt('designer.hint.confirm')
      }
    },
    mounted() {
      //
    },
    beforeUnmount() {
      this.parentFormRef.setChildFormRef(null)
    },
    methods: {
      show() {
        this.dialogVisible = true

        // 设置readMode模式
        this.$nextTick(() => {
          if (this.options.readMode) {
            this.$refs.dFormRef.setReadMode(true)
          }

          this.$refs.dFormRef.setDialogOrDrawerRef(this)
          this.parentFormRef.setChildFormRef(this.$refs.dFormRef)
        })
      },

      close() {
        if (this.options.onDialogBeforeClose) {
          const customFn = new Function(
            'done',
            this.options.onDialogBeforeClose
          )
          const closeResult = customFn.call(this)
          if (closeResult === false) {
            return
          }
        }

        this.dialogVisible = false
        setTimeout(this.deleteWrapperNode, 150)
      },

      deleteWrapperNode() {
        const wrapperNode = document.getElementById(
          'vf-dynamic-dialog-wrapper' + this.wrapperId
        )
        if (wrapperNode) {
          document.body.removeChild(wrapperNode)
        }
      },

      handleBeforeClose(done) {
        if (this.options.onDialogBeforeClose) {
          const customFn = new Function(
            'done',
            this.options.onDialogBeforeClose
          )
          const closeResult = customFn.call(this)
          return closeResult === false ? closeResult : done()
        }

        return done()
      },

      handleCloseEvent() {
        this.dialogVisible = false
        setTimeout(this.deleteWrapperNode, 150)
      },

      handleOpenedEvent() {
        if (this.options.onDialogOpened) {
          const customFn = new Function(this.options.onDialogOpened)
          customFn.call(this)
        }
      },

      handleCancelClick() {
        if (this.options.onCancelButtonClick) {
          const customFn = new Function(this.options.onCancelButtonClick)
          const clickResult = customFn.call(this)
          if (clickResult === false) {
            return
          }
        }

        this.dialogVisible = false
        setTimeout(this.deleteWrapperNode, 150)
      },

      handleOkClick() {
        if (this.options.onOkButtonClick) {
          const customFn = new Function(this.options.onOkButtonClick)
          const clickResult = customFn.call(this)
          if (clickResult === false) {
            return
          }
        }
        // 判断如果弹窗来自表单参照，做如下处理
        // if(!!this.options.openReferID){
        // 	this.selectRecordToFormRefer()
        // }

        this.dialogVisible = false
        setTimeout(this.deleteWrapperNode, 150)
      },

      getParentFormRef() {
        return this.parentFormRef
      },

      getFormRef() {
        return this.$refs.dFormRef
      },

      getWidgetRef(widgetName, showError = false) {
        return this.$refs.dFormRef.getWidgetRef(widgetName, showError)
      },

      getExtraData() {
        return this.extraData
      }
    }
  }
</script>

<style scoped></style>
