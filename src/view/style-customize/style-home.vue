<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="样式穿透" name="style-penerate">
        <style-penetrate-example></style-penetrate-example>
      </el-collapse-item>

      <el-collapse-item title="滑动条样式优化" name="style-embellish">
        <scrollbar-embellish></scrollbar-embellish>
      </el-collapse-item>

      <el-collapse-item title="待补充3" name="3">
        <div></div>
      </el-collapse-item>

      <el-collapse-item title="待补充4" name="4">
        <div></div>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import ScrollbarEmbellish from './scrollbar-new/scrollbar-embellish.vue'
import StylePenetrateExample from './style-penetrate/style-penetrate-example.vue'
export default {
  data() {
    return {
      activeName: ''
    }
  },
  components: {
    ScrollbarEmbellish,
    StylePenetrateExample
  }
}
</script>

<style>
</style>
