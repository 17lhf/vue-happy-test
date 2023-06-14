<template>
  <div>
    <p>
      因为关键字scoped的原因,style标签内的样式只会对当前组件内容生效,因为最终生成出来的样式选择器是这样的: .page .data[data-v-98cf4d84] ,
      所以这个data样式只会对含有 data-v-98cf4d84 属性的HTML元素生效。
      但是如果这个data样式,是在某个第三方组件当中的, 这个组件的class就是data, 没有 data-v-98cf4d84 属性。
      这时候我们这么写样式是无法生效的,所以就需要用到样式穿透, 将[data-v-98cf4d84]选择器去除,同时只对当前组件生效, 避免影响其他组件。
    </p>
    <p>
      当lang="css" 或者不写时，使用<B>&gt;&gt;&gt;</B>
    </p>
    <el-button @click="showWay1">查看示例（css）</el-button>
    <p>
      当lang="sass" 或者"less"时，使用<B>/deep/</B>或者<B>::v-deep</B>
    </p>
    <p style="font-style:italic;">因为作者不用sass和less，所以不做示例展示</p>
    <!-- <el-button @click="showWay2">查看示例（sass）</el-button>
    <el-button @click="showWay3">查看示例（less）</el-button> -->
    <way-1 ref="way1" v-if="way1Visible"></way-1>
    <!-- <way-2 ref="way2" v-if="way2Visible"></way-2>
    <way-3 ref="way3" v-if="way3Visible"></way-3> -->
  </div>
</template>

<script>
import Way1 from './ways/penerate-way1.vue'
// import Way2 from './ways/penerate-way2.vue'
// import Way3 from './ways/penerate-way3.vue'
export default {
  data () {
    return {
      way1Visible: false,
      // way2Visible: false,
      // way3Visible: false
    }
  },
  components: {
    Way1,
    // Way2,
    // Way3
  },
  methods: {
    showWay1 () {
      this.way1Visible = true
      this.$nextTick(() => {
        this.$refs['way1'].init()
      })
    },
    // showWay2 () {
    //   this.way2Visible = true
    //   this.$nextTick(() => {
    //     this.$refs['way2'].init()
    //   })
    // },
    // showWay3 () {
    //   this.way3Visible = true
    //   this.$nextTick(() => {
    //     this.$refs['way3'].init()
    //   })
    // }
  }
}
</script>

<style>

</style>