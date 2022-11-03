<template>
  <div>
    <h1>Excel表格文件操作示例</h1>
    <p>注：官网文档路径：https://docs.sheetjs.com/docs/getting-started/example</p>
    <p>第一步：导入XLSX依赖 npm install xlsx@0.18.5 --save</p>
    <p>第二步：将要用到的工具方法引入</p>
    <div>
      <el-button type="primary" @click="genOneSheetExcel" :disabled="geningOneSheetExcel">生成单个sheet的excel文件</el-button>
    </div>
  </div>
</template>

<script>
import { genOneSheetExcelFile } from '@/view/excel/utils/gen-excel.js'
// import { handleOnlyFirstColExcelFile } from '@/view/excel/utils/read-excel.js'
export default {
  data () {
    return {
      geningOneSheetExcel: false // true表示正在生成单个sheet的excel文件，禁止重复点击按钮
    }
  },
  methods: {
    // 生成单个sheet的excel文件
    genOneSheetExcel () {
      this.geningOneSheetExcel = true
      // 开始构造测试数据生成Excel文件
      let data = []
      for (let i = 0; i < 2; i++) {
        let dataItem = []
        let colNames = ['第一列-' + i, '第二列-' + i, '第三列-' + i]
        let row1 = ['数据1', '数据2', '数据3']
        let row2 = ['data1', 'data2', 'data3']
        let row3 = ['值1', '值2', '值3']
        let row4 = ['12345678901', '12345678901', '12345678901']
        let row5 = ['2022/11/02 11:12:20', '2022/11/02 12:12:12', '2022/11/03 01:12:01']
        dataItem.push(colNames)
        dataItem.push(row1)
        dataItem.push(row2)
        dataItem.push(row3)
        dataItem.push(row4)
        dataItem.push(row5)
        data.push(dataItem)
      }
      let colWidth = [['30', '40', '50'], []]
      let rowHeight = [[], ['20', '25', '30', '35', '40', '45']]
      let sheetName = ['第一个Sheet', '第二个Sheet']
      let fileName = 'N个表的Excel.xlsx'
      
      genOneSheetExcelFile(data, colWidth, rowHeight, sheetName, fileName)
      // 文件生成完毕
      this.geningOneSheetExcel = false
    }
  }
}
</script>

<style>
</style>