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
      keyName: '',
      valueName: '',
      data: [],
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
     * @param data 每个子元素都是由{'name': '', 'value': ''}的对象组成
     */
    init (title, desc, tipText, keyName, valueName, data) {
      this.title = title
      if (desc !== null) {
        this.desc = desc
      }
      this.tipText = tipText
      this.keyName = keyName
      this.valueName = valueName
      this.data = data
      this.drawEchart()
    },
    // 绘制图表
    drawEchart () {
      if (this.myChart === null || this.myChart === '' || this.myChart === undefined) {
        this.myChart = this.$echarts.init(this.$el)
      }
      let _this = this
      let option = {
        title: {
          left: 'center',
          text: this.title,
          subtext: this.tipText
        },
        tooltip: { // 鼠标放在图上会显示当前位置的信息
          trigger: 'item',
          // 饼状图情况下模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据项名称，数值，百分比。
          formatter: '{b}<br />{a}: {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              readOnly: true,
              show: true,
              title: '数据视图',
              lang: ['数据视图', `<span>关闭</span>`, 'Refresh'],
              // 自定义数据视图展示格式
              optionToContent: function (opt) {
                let series = opt.series
                let tdHeads = '<td style="padding:0 10px">' + _this.keyName + '</td>'
                series.forEach(function (item) {
                  tdHeads += '<td style="padding: 0 10px">' + item.name + '</td>'
                })
                let table = '<table id="dataView" border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:center;width:95%;height:100%"><tbody><tr>'
                  + tdHeads + '</tr>'
                let tdBodys = ''
                for (let i = 0, l = series[0].data.length; i < l; i++) {
                  for (let j = 0; j < series.length; j++) {
                    if (typeof (series[j].data[i]) === 'object') {
                      tdBodys += '<td>' + series[j].data[i].value + '</td>'
                    } else {
                      tdBodys += '<td>' + series[j].data[i].name + '</td>'
                    }
                  }
                  table += '<tr><td style="padding: 0 10px">' + series[0].data[i].name + '</td>' + tdBodys + '</tr>'
                  tdBodys = ''
                }
                table += '</tbody></table>'
                return table
              }
            },
            saveAsImage: {
              title: '保存为图片'
            }
          },
          right: '10px'
        },
        legend: {
          show: false
        },
        series: [
          {
            name: this.valueName,
            type: 'pie',
            radius: '50%',
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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