<template>
  <div>
    <div>
      本页面内容均为：前端CSS动画相关示例
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="加载中动画" name="loadingAnimation">
        <loading-animation></loading-animation>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import LoadingAnimation from './loading/loading-animation.vue'
export default {
  data() {
    return {
      activeName: 'loadingAnimation'
    }
  },
  components: {
    LoadingAnimation
  }
}
</script>

<style>
</style>