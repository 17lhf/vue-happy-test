<template>
  <div>
    <el-form :inline="true" :model="dataForm" class="dataForm">
      <el-form-item label="数字值">
        <el-input v-model="dataForm.numValue" placeholder="数字值" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="page.records"
      style="width: 100%">
      <!-- <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="numValue"
        label="数字值"
        width="180">
      </el-table-column>
      <el-table-column
        prop="strValue"
        label="字符串值">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page.current"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="page.size"
      layout="sizes, prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      dataForm: {
        numValue: ''
      },
      page: {
        records: [],
        total: 0,
        size: 5,
        current: 1
      }
    }
  },
  created() {
    this.dataList()
  },
  methods: {
    // 分页获取数据列表
    dataList() {
      // 实例化一个axios对象，用于发送请求
      let http = axios.create({
        baseURL: 'http://127.0.0.1:12312/happyTest/',
        timeout: 3000,
        headers: {}
      })
      // 正式向服务端发送文件数据
      http.get('mp/query', {
        params: {
          numValue: this.dataForm.numValue,
          total: this.page.total,
          size: this.page.size,
          current: this.page.current
        }
      }, {
        headers: {} // 这里可以附带上请求头
      }).then(({data}) => {
        if(data) {
          this.page = data
        } else {
          this.page.records = []
          this.page.total = 0
          this.page.current = 1
        }
      })
    },
    // 查询
    query() {
      this.page.current = 1 // 每次点击查询，都是从第一页开始
      this.dataList()
    },
    handleSizeChange(val) {
      this.page.size = val
    },
    handleCurrentChange(val) {
      this.page.current = val
      this.dataList()
    },

  }
}
</script>

<style>
  .dataForm {
    text-align: left; /* 让表单项左对齐 */
  }
</style>