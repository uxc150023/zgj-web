<template>
  <div class="components-tabs">
    <div class="ap-box" :class="{ cancelBottomLine: state.cancelBottomLine }">
      <el-tabs
        v-model="state.activeName"
        class="demo-tabs"
        @tab-change="tabChange"
      >
        <el-tab-pane
          :label="$t(item.label)"
          :name="item.name"
          v-for="(item, index) in state.data"
          :key="index"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script setup>
  import { reactive, onBeforeMount, onMounted, watch } from 'vue'
  const props = defineProps({
    // 标识
    refs: {
      type: String,
      default: ''
    },
    // 处理类型
    type: {
      type: String,
      default: '0'
    },
    // 取消底部的线
    cancelBottomLine: {
      type: Boolean,
      default: false
    },
    // 布局
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 选中名字
    activeName: {
      type: String,
      default: ''
    }
  })
  const emit = defineEmits(['tab-change', 'getActiveName'])
  const state = reactive({
    activeName: '',
    data: [],
    cancelBottomLine: false
  })
  // console.log(props.data);
  function tabChange(pane, ev) {
    // console.log(pane, ev);
    emit('tab-change', state.activeName)
  }
  function getActiveName() {
    emit('getActiveName', state.activeName)
  }
  // 初始化数据
  function initData() {
    state.activeName = props.activeName
    state.data = props.data
    state.cancelBottomLine = props.cancelBottomLine
  }
  watch(props, (newValue, oldValue) => {
    // console.log(newValue, oldValue);
    // 初始化数据
    initData()
  })
  onBeforeMount(() => {
    // console.log(`the component is now onBeforeMount.`)
    // 初始化数据
    initData()
    // 暂时不用
    getActiveName()
  })
  onMounted(() => {
    // console.log(`the component is now mounted.`)
  })
</script>
<style lang="scss" scoped>
  .components-tabs {
    margin: 0%;

    :deep {
      .el-tabs__nav-wrap::after {
        height: 1px;
        background-color: var(--jy-color-border-2);
      }

      .el-tabs__item.is-active {
        color: var(--jy-primary-6);
      }

      .el-tabs__active-bar {
        background-color: var(--jy-primary-6);
      }

      .el-tabs__item:hover {
        color: var(--jy-primary-6);
      }
      .el-tabs__item {
        color: var(--jy-color-text-3);
      }
      .cancelBottomLine {
        .el-tabs__nav-wrap::after {
          height: 0;
        }
      }
    }
  }
</style>
