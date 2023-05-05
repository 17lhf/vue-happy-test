<template>
  <!-- 此页面包含所有的关于使用element-ui过程中通过定制化解决部分痛点的示例 -->
  <div>
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="表单错误提示信息适应小屏幕(如果没看出区别，则需要把屏幕宽度缩小到报错信息出现换行)" name="valid-error-msg-optimize">
        <div>
          <div>优化前：</div>
          <div><valid-error-msg-orignal></valid-error-msg-orignal></div>
        </div>
        <div>
          <div>优化后：</div>
          <div><valid-error-msg-optimize></valid-error-msg-optimize></div>
        </div>
      </el-collapse-item>

      <el-collapse-item title="待补充2" name="2">
        <div></div>
        <div></div>
      </el-collapse-item>

      <el-collapse-item title="待补充3" name="3">
        <div></div>
        <div></div>
        <div></div>
      </el-collapse-item>

      <el-collapse-item title="待补充4" name="4">
        <div></div>
        <div></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ValidErrorMsgOptimize from './form/valid-error-msg-optimize.vue'
import ValidErrorMsgOrignal from './form/valid-error-msg-orignal.vue'
export default {
  data() {
    return {
      activeName: ''
    }
  },
  components: {
    ValidErrorMsgOptimize,
    ValidErrorMsgOrignal
  }
}
</script>

<style>

</style>