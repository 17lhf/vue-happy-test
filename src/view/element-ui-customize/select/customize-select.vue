<template>
  <!-- 对el-select组件进行了二次封装，使之变成一个新的组件 -->
  <div>
    <el-select v-model="selectedValue" :disabled="disabled" :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  // 可以在这里对v-model绑定的属性名和事件进行变更
  model: {
    prop: 'value',
    event: 'input'
  },
  // props默认单向绑定，只读（更多props相关的用法可以去看vue官方文档）
  props: {
    // v-model默认绑定的属性名是value
    value: {
      type: String // 此处声明类型，如果传入的值不满足类型要求，Vue 会在浏览器控制台中抛出警告来提醒使用者
    },
    options: {
      type: Array
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false // 设置默认值
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.value
      },
      set(newValue) {
        // v-model默认绑定的value变化事件是input
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style>

</style>