<template>
  <div>
    <div>
      本页面内容均为：后端一些测试实例所需的前端内容，需要结合后端对应内容进行阅读
    </div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="分页查询优化" name="queryData">
        <query-data></query-data>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import QueryData from './query/query-data.vue'
export default {
  data() {
    return {
      activeName: 'queryData'
    }
  },
  components: {
    QueryData
  }
}
</script>

<style>
</style>