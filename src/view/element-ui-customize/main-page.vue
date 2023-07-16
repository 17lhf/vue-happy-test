<template>
  <!-- 此页面包含所有的关于使用element-ui过程中通过定制化解决部分痛点的示例 -->
  <div>
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="表单错误提示信息适应小屏幕(如果没看出区别，则需要把屏幕宽度缩小到报错信息出现换行)" name="validErrorMsgOptimize">
        <div>
          <div>优化前：</div>
          <valid-error-msg-orignal></valid-error-msg-orignal>
        </div>
        <div>
          <div>优化后：</div>
          <valid-error-msg-optimize></valid-error-msg-optimize>
        </div>
      </el-collapse-item>

      <el-collapse-item title="级联选择器使用示例" name="normalCascader">
        <normal-cascader></normal-cascader>
      </el-collapse-item>

      <el-collapse-item title="封装自定义的Select组件" name="customizeSelect">
        <div>disabled使用默认值，其他正常传值</div>
        <customize-select v-model="selectedValue" :options="options" :placeholder="placeholder"></customize-select>
        <el-button @click="viewSelectedValue">查看当前选中的值</el-button>
        <div>全部正常传值</div>
        <customize-select v-model="selectedValue" :disabled="true" :options="options" :placeholder="placeholder"></customize-select>
      </el-collapse-item>

      <el-collapse-item title="待补充4" name="4">
        <div></div>
        <div></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import NormalCascader from './cascader/normal-cascader.vue'
import ValidErrorMsgOptimize from './form/valid-error-msg-optimize.vue'
import ValidErrorMsgOrignal from './form/valid-error-msg-orignal.vue'
import CustomizeSelect from './select/customize-select.vue'
export default {
  data() {
    return {
      activeName: '',
      options: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }],
      selectedValue: '',
      placeholder: 'Test placeholder'
    }
  },
  components: {
    ValidErrorMsgOptimize,
    ValidErrorMsgOrignal,
    NormalCascader,
    CustomizeSelect
  },
  methods: {
    viewSelectedValue() {
      console.log('selectedValue: ' + this.selectedValue)
    }
  }
}
</script>

<style>
</style>
