<template>
  <div class="verification-btn login-input">
    <el-button
      @click="start"
      type="primary"
      size="large"
      class="btn"
      :style="props.customStyle"
      :disabled="state.sendMsg"
    >
      <span v-if="!state.sendMsg">{{ $t('t-zgj-getCode') }}</span>
      <span v-else>{{ state.timer }}{{ $t('t-send-again') }}</span>
    </el-button>
  </div>
</template>

<script setup>
  /**
   * timer: 剩余时间
   */
  import { reactive, watch } from 'vue'
  import { ElMessage } from 'element-plus'
  import i18n from '@/utils/i18n'
  const props = defineProps({
    customStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    customClick: {
      type: Boolean,
      default: false
    }
  })
  const emits = defineEmits('customClickFn')
  const state = reactive({
    timer: 60,
    sendMsg: false
  })

  watch(
    () => i18n.global.locale,
    () => {
      // console.log(newVal, oldVal, '====')
    },
    { immediate: true, deep: true }
  )

  // 发送短信
  const start = () => {
    if (props.customClick) {
      emits('customClickFn')
      return
    }
    countDown()
  }

  const countDown = () => {
    if (state.sendMsg) return
    state.sendMsg = true
    ElMessage.success('短信发送成功')
    const t = setInterval(() => {
      if (state.timer <= 0) {
        clearInterval(t)
        state.sendMsg = false
        state.timer = 60
      }
      state.timer--
    }, 1000)
  }

  defineExpose({
    countDown
  })
</script>

<style scoped lang="scss">
  .verification-btn {
    .btn {
      font-size: 16px;
      color: #fafafa;
      width: 150px;
      border-radius: 4px;
      text-align: center;
      margin-left: 10px;
    }
  }
</style>
