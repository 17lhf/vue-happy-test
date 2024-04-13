<template>
  <div class="block">
    <div>
      <p class="title">只能选择大于当天的日期的场景</p>
      <p>组件值：{{ value }}</p>
      <el-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']"
        :picker-options="pickerOptions">
        <!-- 选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒 -->
      </el-date-picker>
    </div>

    <div>
      <p class="title">可选时间范围为动态的场景</p>
      <p>组件值：{{ value2 }}</p>
      <el-date-picker
        v-model="value2"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']"
        :picker-options="pickerOptions2">
        <!-- 选择日期范围时，默认情况下，起始日期和结束日期的时间部分均为当天的 0 点 0 分 0 秒 -->
      </el-date-picker>
      <div>
        <el-button @click="getValue2">打印选中的日期值</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          // true 表示禁用
          disabledDate(date) {
            // console.log(this) // undefined
            // 这里用于比较的入参date，始终是 0 点 0 分 0 秒
            return new Date(date).getTime() < new Date().getTime() // 只能选择大于当天的日期（选不了当天日期，因为基本上实际操作肯定大于零点）
          }
        },
        value: '',
        pickerOptions2: {
          // true 表示禁用
          // 这里用于比较的入参date，始终是 0 点 0 分 0 秒
          disabledDate: date => { // 箭头函数无自己的this，会用使用封闭执行上下文的this
            // 无起止时间限制
            if (this.beginDate === '' && this.endDate === '') {
              return false 
            } else if (this.beginDate === '') { // 只限制结束时间
              return new Date(date).getTime() > new Date(this.endDate).getTime() 
            } else if (this.endDate === ''){ // 只限制起始时间
              return new Date(date).getTime() < new Date(this.beginDate).getTime() 
            } else { // 起止时间都进行限制
              return new Date(date).getTime() < new Date(this.beginDate).getTime() || new Date(date).getTime() > new Date(this.endDate).getTime()
            }
          }
        },
        value2: '',
        beginDate: '2024-03-25',
        endDate: '2024-04-25'
      }
    },
    methods: {
      getValue2() {
        console.log(this.value2[0])
        console.log(this.value2[1])
      }
    }
  }
</script>

<style scoped>
  .title {
    font-weight: bolder;
    font-size: large;
  }
</style>