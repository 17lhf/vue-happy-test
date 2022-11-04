<template>
  <div>
    <!-- 一些说明 -->
    <div>
      <h1>Echarts 图表包装模板使用举例</h1>
      <p>第一步：在项目中引入Echarts——在终端中输入：npm install echarts@5.4.0 --save （指定本实例编写时的最新版本，实际可以不用这么高版本）</p>
      <p>第二步：按照实际需求，编写Echarts图表和组件的按需引入配置文件index.js。然后在main.js文件里将其引入。</p>
      <p>第三步：哪里要用这些包装模板，就在哪里引入组件（注意，也要依据实际情况，微调组件内的部分代码）</p>
      <div class="note">
        <p>注意：这种包装模板的好处很明显，就是不同位置若是使用同一种echart图，就不用在写一次绘制代码，直接调用组件即可。</p>
        <p>但是，也有坏处，那就是由于展示数据都是源自外部，所以i18n的国际化无法有效刷新图表展示内容，需要重新构造整个传入参数，重新绘制图表才行</p>
      </div>
    </div>
    <!-- 以组件化的方式使用 -->
    <div>
      <div class="echartDiv">
        <basic-line-chart ref="basicLineChart"></basic-line-chart>
      </div>
      <div class="echartDiv">
        <area-chart-with-axis ref="areaChartWithAxis"></area-chart-with-axis>
      </div>
      <div class="echartDiv">
        <basic-pie-chart ref="basicPieChart"></basic-pie-chart>
      </div>
    </div>

  </div>
</template>

<script>
import BasicLineChart from '@/view/echarts/components/basic-line-chart.vue'
import AreaChartWithAxis from '@/view/echarts/components/area-chart-with-axis.vue'
import BasicPieChart from '@/view/echarts/components/basic-pie-chart.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    BasicLineChart,
    AreaChartWithAxis,
    BasicPieChart
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.showBasicLineChart()
      this.showAreaChartWithAxis()
      this.showBasicPieChart()
    },
    showBasicLineChart () {
      let data = {}
      data.title = '基础折线图示例'
      data.desc = '图表加载失败时的说明文字'
      data.tipText = '这是基础折线图的示例，别看错了！'
      data.xName = 'x轴'
      data.yName = 'y轴'
      let xData = []
      let yData1 = []
      let yData2 = []
      for (let i = 1; i < 6; i++) {
        xData.push('2022/10/' + i)
        yData1.push(i + 1)
        yData2.push(i * 2 - 2)
      }
      let yData = [
        {
          'name': '第一条线',
          'data': yData1,
          'color': 'blue'
        },
        {
          'name': '第二条线',
          'data': yData2,
          'color': 'red'
        }
      ]
      data.xData = xData
      data.yData = yData
      this.$refs.basicLineChart.init(data.title, data.desc, data.tipText, data.xName,
        data.xData, data.yName, data.yData)
    },
    showAreaChartWithAxis () {
      let data = {}
      data.title = '时间轴折线图示例'
      data.desc = '图表加载失败时的说明文字'
      data.tipText = '这是时间轴折线图的示例，别看错了！'
      data.xName = '谁谁谁'
      data.yName = '数值'
      let xData = []
      let yData = []
      for (let i = 1; i < 6; i++) {
        xData.push('用户' + i)
        yData.push(i + 1)
      }
      data.xData = xData
      data.yData = yData
      this.$refs.areaChartWithAxis.init(data.title, data.desc, data.tipText, data.xName,
        data.xData, data.yName, data.yData)
    },
    showBasicPieChart () {
      let data = {}
      data.title = '基础饼状图示例'
      data.desc = '图表加载失败时的说明文字'
      data.tipText = '这是基础饼状图的示例，别看错了！'
      data.keyName = 'Key Mame'
      data.valueName = 'Value Name'
      data.data = []
      for (let i = 1; i < 10; i++) {
        data.data.push({
          'name': '用户' + i,
          'value': i * 2 - 1
        })
      }
      this.$refs.basicPieChart.init(data.title, data.desc, data.tipText, data.keyName, data.valueName, data.data)
    }
  }
}
</script>

<style>
  .note {
    font-weight: bolder;
    color: red;
  }
  .echartDiv {
    background-color: #f8f0f0;
    margin-bottom: 20px;
    width: 50%;
    height: 600px;
  }
</style>