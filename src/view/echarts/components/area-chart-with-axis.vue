<template>
  <div style="width:100%; height:100%">
    <div>{{desc}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      desc: '图表加载失败',
      tipText: '',
      xName: '',
      xData: [],
      yName: '',
      yData: [],
      myChart: ''
    }
  },
  mounted () {
    // 监听浏览器窗口的尺寸变化，进行图表大小的同步适应
    let _this = this
    window.addEventListener('resize', function () {
      // 先做判定，避免还未实例化就被调用
      if (_this.myChart !== null && _this.myChart !== '' && _this.myChart !== undefined) {
        _this.myChart.resize()
      }
    })
  },
  methods: {
    /**
     * 初始化图表要展示的内容
     * @param desc 若传入为null，表示要使用默认值
     */
    init (title, desc, tipText, xName, xData, yName, yData) {
      this.title = title
      if (desc !== null) {
        this.desc = desc
      }
      this.tipText = tipText
      this.xName = xName
      this.xData = xData
      this.yName = yName
      this.yData = yData
      this.drawEchart()
    },
    // 绘制图表
    drawEchart () {
      if (this.myChart === null || this.myChart === '' || this.myChart === undefined) {
        this.myChart = this.$echarts.init(this.$el)
      }
      let option = {
        // 鼠标放在图上会显示当前位置的信息
        tooltip: {
          trigger: 'axis',
          // 自定义展示格式
          // {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
          formatter: this.xName + ': {b0}<br/>{a}: {c0}'
        },
        title: {
          left: 'center',
          text: this.title,
          subtext: this.tipText
        },
        grid: {
          top: 100
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
              title: {
                zoom: '区域缩放',
                back: '区域缩放还原'
              }
            },
            restore: {
              title: '还原'
            },
            saveAsImage: {
              title: '保存为图片'
            }
          },
          right: '10px'
        },
        xAxis: {
          name: this.xName,
          type: 'category',
          data: this.xData
        },
        yAxis: {
          name: this.yName,
          type: 'value',
          boundaryGap: [0, '100%'],
          axisLine: {show: true}
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 20
          }
        ],
        series: [
          {
            name: this.yName,
            type: 'line',
            smooth: false,
            symbol: 'none',
            areaStyle: {},
            data: this.yData
          }
        ]
      }
      // 官网文档路径：https://echarts.apache.org/zh/api.html#echartsInstance.setOption
      // 这里写的第二个参数表示 notMerge 可选。
      // 是否不跟之前设置的 option 进行合并。默认为 false，即表示合并。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
      // 为false的话，就是看实际情况，有的情况下，会同时出现旧的图和新的图同时展示
      this.myChart.setOption(option, true)
    }
  }
}
</script>

<style>
</style>