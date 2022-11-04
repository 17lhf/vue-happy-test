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
      // 替代原本应该出现的yData, 以实现支持n条折线的场景
      series: [],
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
      this.series = []
      for (let i = 0, len = yData.length; i < len; i++) {
        this.series.push({
          name: yData[i].name,
          data: yData[i].data,
          type: 'line',
          itemStyle: { 
            color: yData[i].color // 设置折线点的颜色
          },
          lineStyle: {
            color: yData[i].color // 设置折线的颜色
          }
        })
      }
      this.drawEchart()
    },
    // 绘制图表
    drawEchart () {
      if (this.myChart === null || this.myChart === '' || this.myChart === undefined) {
        this.myChart = this.$echarts.init(this.$el)
      }
      let option = {
        title: {
          text: this.title,
          subtext: this.tipText,
          left: 'center'
        },
        tooltip: { // 鼠标放在图上会显示当前位置的信息
          trigger: 'axis'
          // 这里不写formatter，就是用echarts默认的展示格式
        },
        legend: { // 展现不同系列的标记(symbol)，颜色和名字
          show: false
        },
        grid: {
          // bottom: 150 // 折线图底部的区域大小
          top: 100
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: true,
              show: true,
              title: '数据视图',
              lang: ['数据视图', `<span>关闭</span>`, 'Refresh'],
              optionToContent: function (opt) {
                let axisData = opt.xAxis[0].data
                let series = opt.series
                let tdHeads = '<td  style="padding:0 10px">' + opt.xAxis[0].name + '</td>'
                series.forEach(function (item) {
                  tdHeads += '<td style="padding: 0 10px">' + item.name + '</td>'
                })
                let table = '<table id="dataView" border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center;width:95%;height:100%"><tbody><tr>'
                  + tdHeads + '</tr>'
                let tdBodys = ''
                for (let i = 0, l = axisData.length; i < l; i++) {
                  for (let j = 0; j < series.length; j++) {
                    if (typeof (series[j].data[i]) === 'object') {
                      tdBodys += '<td>' + series[j].data[i].value + '</td>'
                    } else {
                      tdBodys += '<td>' + series[j].data[i] + '</td>'
                    }
                  }
                  table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>'
                  tdBodys = ''
                }
                table += '</tbody></table>'
                return table
              }
            },
            magicType: {
              type: ['line', 'bar'],
              title: {
                line: '切换为折线图',
                bar: '切换为柱状图'
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
          data: this.xData,
          axisLabel: {
            interval: 'auto',
            formatter: function (value) {
              // 这里可以自定义x轴展示的数据的实际内容，支持"\n"之类的字符
              // 像我这里就是加上一个美元符号来展示
              return '$' + value
            },
            fontSize: 12 // 字体大小
          }
        },
        yAxis: {
          name: this.yName,
          type: 'value',
          axisLine: {show: true}
        },
        series: this.series
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