<template>
  <div class="scrollbar-embellish">

    <div class="title-tip">
      <div>测试基于浏览器：FireFox114.0.1、IE11、 Google Chrome 84.0.4147.105、Edge 114.0.1823.51</div>
      <div>各个属性的值可选范围可以在对应的浏览器的开发者工具中进行查看</div>
    </div>

    <div class="example" style="margin-bottom: 100px">
      <div class="tip">不产生滚动条的情况</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
      <div>{{data}}</div>
    </div>

    <div class="example">
      <div class="div-scroll-base">
        <div class="tip">默认的产生滚动条的情况（此时滚动条的样式依据的是各个浏览器的默认设置）</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
      </div>
    </div>

    <div class="example">
      <div class="div-scroll-base embellish-one">
        <div class="tip">样式优化的滚动条的情况</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
        <div>{{data}}</div>
      </div>
    </div>

    <div class="example">
      <div class="tip">滚动条在ElementUI组件上的情况,横向的自定义样式不生效</div>
      <div class="tip">是因为该滚动条的产生不是我们定义滚动条样式涉及的元素,是组件内部的</div>
      <div class="tip">此现象应该可以延伸到其他的element-ui的组件上</div>
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

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '这是一段没有任何意义的可以被替换的内容，主要是为了让长度可以溢出元素块的宽度，产生滚动条',
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
  .title-tip {
    font-weight: bolder;
    color: red;
    margin-bottom: 10px;
  }

  .example {
    max-height: 300px;
    max-width: 500px;
    margin-bottom: 10px;
    border: black;
    border-width: 1px;
    border-style: solid;
    padding: 5px;
    white-space: nowrap; /** 不让文字自动换行 */
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
  .tip {
    font-weight: bolder;
    color: red;
  }
  /* 滚动条整体 */ /** 使用less时，-webkit里可以指定区分横向和纵向的滚动条样式，这里没写就是默认横纵都应用样式 */
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
  /* 两个滚动条交接处（通常是右下角位置） */
  .embellish-one::-webkit-scrollbar-corner { /** Chrome、Edge、Opera、Safari、iOS 上所有的浏览器，Webkit引擎 */
    background-color: blue;
  }
  .embellish-one {
    scrollbar-width: thin; /** thin会使得三角箭头消失，none会使得滚动条消失，auto就是正常的滚动条 */ /** Firefox */
    scrollbar-color: red green; /** 第一个表示滑块的颜色，第二个表示轨道的颜色 */  /** Firefox */
    /** IE仅能修改颜色，宽度无法自定义 */
    scrollbar-base-color: green; /** IE */
    scrollbar-track-color: red; /** IE */
    scrollbar-arrow-color: blue; /*三角箭头的颜色*/ /** IE */
  }
</style>
