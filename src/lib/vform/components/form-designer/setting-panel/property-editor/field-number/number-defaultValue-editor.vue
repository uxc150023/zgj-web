<template>
  <el-form-item v-if="!hasConfig('optionItems')" :label="i18nt('designer.setting.defaultValue')">
    <el-input-number type="text" style="width: 100%" v-model="optionModel.defaultValue"
              @change="emitDefaultValueChange"></el-input-number>
  </el-form-item>
</template>

<script>
  import i18n from "@/lib/vform/utils/i18n"
  import propertyMixin from "@/lib/vform/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "number-defaultValue-editor",
    mixins: [i18n, propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
