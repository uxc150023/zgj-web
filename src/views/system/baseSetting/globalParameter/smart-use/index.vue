<template>
  <div class="inner-container">
    <!-- content -->
    <div class="inner-page-content">
    
      <div class="l-title">流程配置</div>

      <el-form :model="form" label-width="160px">
        <el-row>
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">印章审批流程</div>
                <el-tooltip effect="dark" content="印章审批流程" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.ApprovalProcess" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">盖后复核</div>
                <el-tooltip effect="dark" content="盖后复核" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.RecheckCover" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">允许重复用印</div>
                <el-tooltip effect="dark" content="允许重复用印" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.RepeatSeal" />
            </el-form-item>
          </el-col>
          
        </el-row>
        
        <el-row>
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">允许重置归档</div>
                <el-tooltip effect="dark" content="允许重置归档" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.ResetArchive" />
            </el-form-item>
          </el-col>
        
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">允许批量文件归档</div>
                <el-tooltip effect="dark" content="允许批量文件归档" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.BatchArchiving" />
            </el-form-item>
          </el-col>
        
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">自动结束用印时间</div>
              </template>
              <el-input-number v-model="form.sealEndTime" />
            </el-form-item>
          </el-col>
        
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">未用印自动结束时间</div>
                
              </template>
              <el-input-number v-model="form.noSealEndTime" />
            </el-form-item>
          </el-col>
        
        </el-row>
      </el-form>
    
      <div class="l-title">用印配置</div>

      <el-form :model="formSeal" label-width="180px">
        <el-row>
          <el-col :span="16">
            <el-form-item>
              <template #label>
                <div class="label-t">盖章采集人脸</div>
              </template>
              <el-switch v-model="formSeal.FaceCollection" style="margin-right:4px;" />

              <el-radio-group v-model="formSeal.FirstFace" v-if="formSeal.FaceCollection">
                <el-radio :label="1">首次进入采集</el-radio>
                <el-radio :label="2">每个印章首次进入采集</el-radio>
                <el-radio :label="3">每次进入都采集</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">外借电子围栏</div>
                <el-tooltip effect="dark" content="外借电子围栏" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-switch v-model="form.RepeatSeal" />
            </el-form-item>
          </el-col>
      
        </el-row>
      
        <el-row>
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">盖章请求等待时间</div>
                <el-tooltip effect="dark" content="盖章请求等待时间" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-input-number v-model="formSeal.waitSealTime" /> &nbsp;&nbsp;秒
            </el-form-item>
          </el-col>
      
          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">封标/骑缝盖章单次时间</div>
              </template>
              <el-input-number v-model="formSeal.oneTime" />&nbsp;&nbsp;秒
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item>
              <template #label>
                <div class="label-t">延时缩回</div>
                <el-tooltip effect="dark" content="延时缩回" placement="bottom">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.00004 13.6654C3.31804 13.6654 0.333374 10.6807 0.333374 6.9987C0.333374 3.3167 3.31804 0.332031 7.00004 0.332031C10.682 0.332031 13.6667 3.3167 13.6667 6.9987C13.6667 10.6807 10.682 13.6654 7.00004 13.6654ZM6.33337 8.9987V10.332H7.66671V8.9987H6.33337ZM7.66671 7.90203C8.20249 7.74055 8.66244 7.392 8.96281 6.91986C9.26318 6.44772 9.38397 5.8834 9.3032 5.32968C9.22242 4.77595 8.94545 4.26966 8.52272 3.903C8.09999 3.53635 7.55962 3.33372 7.00004 3.33203C6.46061 3.33199 5.93782 3.5188 5.52057 3.86069C5.10332 4.20259 4.81738 4.67845 4.71137 5.20736L6.01937 5.46936C6.05649 5.28365 6.14559 5.1123 6.27628 4.97524C6.40698 4.83818 6.57392 4.74106 6.75766 4.69517C6.9414 4.64928 7.13439 4.6565 7.31419 4.71601C7.49398 4.77552 7.65318 4.88486 7.77326 5.0313C7.89334 5.17775 7.96937 5.35529 7.99249 5.54326C8.01562 5.73123 7.98489 5.9219 7.90389 6.09309C7.82288 6.26427 7.69493 6.40894 7.53492 6.51025C7.37491 6.61156 7.18943 6.66535 7.00004 6.66536C6.82323 6.66536 6.65366 6.7356 6.52864 6.86063C6.40361 6.98565 6.33337 7.15522 6.33337 7.33203V8.33203H7.66671V7.90203Z"
                      fill="black" fill-opacity="0.25" />
                  </svg>
                </el-tooltip>
              </template>
              <el-input-number v-model="formSeal.DelayTime" />&nbsp;&nbsp;秒
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item>
              <template #label>
                <div class="label-t">盖章中拍照时机</div>
              </template>
              <el-checkbox-group v-model="formSeal.checkList">
                <el-checkbox label="扫码时拍照" />
                <el-checkbox label="下盖时拍照" />
              </el-checkbox-group>
            </el-form-item>
          </el-col>
        
          <el-col :span="8"></el-col>
        
          <el-col :span="8"></el-col>
        </el-row>
      </el-form>
    </div>

    <!-- footer -->
    <div class="inner-footer">
      <el-button type="primary">保存</el-button>
      <el-button >重置</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const form = reactive({
  ApprovalProcess: true,
  RecheckCover: true,
  RepeatSeal: true,
  ResetArchive: true,
  BatchArchiving: true,
  sealEndTime: 0,
  noSealEndTime: 0
})

const formSeal = reactive({
  FaceCollection: false,
  FirstFace: 1,
  waitSealTime: 0,
  oneTime: 0,
  DelayTime: 0,
  checkList: []
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>
.inner-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .inner-page-content {
    flex: 1;
    padding-left: 30px;
    overflow-y: auto;
    .l-title {
      position: relative;
      width: 100%;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      margin: 20px 0;

      &::before {
        content: '';
        position: absolute;
        top: 4px;
        left: -10px;
        width: 3px;
        height: 20px;
        background: var(--jy-primary-6);
      }
    }

    .label-t {
      color: rgba(0, 0, 0, 0.85);
      line-height: 40px;
      font-size: 14px;
      margin-right: 12px;
    }
  }

  .inner-footer {
    height: 60px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
}
</style>
