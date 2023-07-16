<template>
  <div>
    <h1>Excel表格文件操作示例</h1>
    <p>注：官网文档路径：https://docs.sheetjs.com/docs/getting-started/example</p>
    <p>更新日志（GitHub仓库的CHANGELOG.md文件）：https://github.com/SheetJS/sheetjs/blob/github/CHANGELOG.md</p>
    <p>中文翻译后的文档路径：https://geekdaxue.co/read/SheetJS-docs-zh/README.md#d6qsit</p>
    <p>第一步：导入XLSX依赖 npm install xlsx@0.18.5 --save</p>
    <p>第二步：将要用到的工具方法引入</p>
    <div class="expDiv">
      <el-button type="primary" @click="genSheetExcel" :disabled="geningSheetExcel">生成N个sheet的excel文件</el-button>
    </div>

    <div class="expDiv">
      <el-upload
        class="uploadFile"
        ref="upload"
        drag
        action="aa"
        :on-change="onOnlyFirstColChange"
        :auto-upload="false"> <!-- 文件只需要到达浏览器然后运算即可，不需要到达后端，所以这里不需要上传到某个地址, 也不需要自动上传到服务器 -->
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将需要每个工作表的第一列的数据的Excel文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip line-height-none" slot="tip">推荐文件最大不超过10M</div>
      </el-upload>
    </div>

    <div class="expDiv">
      <el-upload
        class="uploadFile"
        ref="upload"
        drag
        action="aa"
        :on-change="onSpecifiesRangeColChange"
        :auto-upload="false"> <!-- 文件只需要到达浏览器然后运算即可，不需要到达后端，所以这里不需要上传到某个地址, 也不需要自动上传到服务器 -->
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将需要读取每个工作表的指定范围列的数据的Excel文件拖到此处（这里默认读取第3列到第5列），或<em>点击上传</em></div>
        <div class="el-upload__tip line-height-none" slot="tip">推荐文件最大不超过10M</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { genExcelFile } from '@/view/excel/utils/gen-excel.js'
import { handleOnlyFirstColExcelFile, handleSpecifiesRangeColExcelFile } from '@/view/excel/utils/read-excel.js'
export default {
  data () {
    return {
      geningSheetExcel: false // true表示正在生成excel文件，禁止重复点击按钮
    }
  },
  methods: {
    // 生成excel文件
    genSheetExcel () {
      this.geningSheetExcel = true
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
      // 空数组表示不设置，那么最终的效果就是宽度/高度使用excel默认的
      let colWidth = [['30', '40', '50'], []]
      let rowHeight = [[], ['20', '25', '30', '35', '40', '45']]
      
      let sheetName = ['第一个Sheet', '第二个Sheet']
      let fileName = 'N个表的Excel.xlsx'
      
      genExcelFile(data, colWidth, rowHeight, sheetName, fileName)
      // 文件生成完毕
      this.geningSheetExcel = false
    },
    // 进行读取每个工作表的第一列的数据
    onOnlyFirstColChange (file) {
      handleOnlyFirstColExcelFile(file).then(function (value) {
        value.forEach(e => {
          console.log(e)
        })
      })
    },
    // 进行读取每个工作表的指定范围列的数据
    onSpecifiesRangeColChange (file) {
      handleSpecifiesRangeColExcelFile(file, 2, 4).then(function (value) {
        value.forEach(e => {
          console.log(e)
        })
      })
    }
  }
}
</script>

<style scoped>
  .expDiv {
    margin-bottom: 10px;
  }
</style>