<template>
  <div class="scrollbar-embellish">

    <div class="example">
      <el-table
        :data="tableData"
        class="table-base">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="230">
        </el-table-column>
      </el-table>
    </div>

    <div class="example">
      <el-table
        :data="tableData"
        class="table-base embellish-one">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="230">
        </el-table-column>
      </el-table>
    </div>

    <div class="example">
      <div class="div-scroll-base embellish-one">
        <el-table
          :data="tableData">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="230">
          </el-table-column>
        </el-table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '李小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '赵小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '钱小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-05',
        name: '孙小虎',
        address: '上海市普陀区金沙江路 1514 弄'
      }, {
        date: '2016-05-06',
        name: '郑小虎',
        address: '上海市普陀区金沙江路 1514 弄'
      }]
    }
  }
}
</script>

<style scoped>
  .example {
    height: 300px;
    margin-bottom: 10px;
    /* overflow: auto; */
  }
  .table-base {
    height: 200px;
    width: 500px !important;
    overflow: auto !important;
  }
  .div-scroll-base {
    height: 200px;
    width: 500px !important;
    overflow: auto !important;
  }
  /* 滚动条整体 */
  .embellish-one::-webkit-scrollbar { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎，兼容性看：https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar */
    width: 10px; /** 控制滑动条的宽度 */
    height: 10px; /** 控制滑动条的高度，写不写都不影响，因为会根据内容的长度自动计算 */
  }
  /* 滚动条滑块 */
  .embellish-one::-webkit-scrollbar-thumb { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    background: #ccc; /** 滑块颜色 */
    border-radius: 5px; /** 滑块圆角 */
  }
  .embellish-one::-webkit-scrollbar-thumb:hover { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    background: red; /** 鼠标移入滑块后，颜色变化 */
  }
  /* 滚动条轨道 */
  .embellish-one::-webkit-scrollbar-track { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    border-radius: 10px; /** 轨道圆角 */
    background-color: #1890ff;  /** 轨道颜色 */
  }
  /* 滚动条两端按钮(上下箭头) */
  .embellish-one::-webkit-scrollbar-button { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    width: 30px;          /* 横向滚动条 宽度 */
    height: 20px;         /* 纵向滚动条 高度 */
    background: black;
    border-radius: 10px;
  }
  /* 两个滚动条交接处 -- x轴和y轴 */
  .embellish-one::-webkit-scrollbar-corner { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    background-color: blue;
  }
  .embellish-one {
    scrollbar-width: thin; /** Firefox */
    scrollbar-color: red green; /** 第一个表示滑块的颜色，第二个表示轨道的颜色 */  /** Firefox */
    /** IE仅能修改颜色，宽度无法自定义 */
    scrollbar-base-color: green; /** IE */
    scrollbar-track-color: red; /** IE */
    scrollbar-arrow-color: blue; /*三角箭头的颜色*/ /** IE */
  }
</style>
