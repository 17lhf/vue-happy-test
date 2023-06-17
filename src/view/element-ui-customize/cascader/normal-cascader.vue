<template>
  <!-- 更多组件信息，参考官方文档：https://element.eleme.cn/#/zh-CN/component/cascader -->
  <div>
    <!-- 
      show-all-levels: 默认为true。为true时，输入框中将显示选中值的完整路径，例如：指南/设计原则/一致。false时，只显示最后一个节点，如：一致
    -->
    <el-cascader
      v-model="selectedItem"
      :options="options"
      :show-all-levels="false"
      :props="cascaderProps"
      @change="handleChange"
      ref="cascaderExample"
      popper-class="cascaderClass">
    </el-cascader>
    <div>
      <el-button @click="getCascaderCheckedNode">获取选中的节点信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /** 
       * 选中项的值，为从第一级到选中那一级的value构成的数组
       * 如果开启多选，则就是二维数组，未开启是一维数组
       */
      selectedItem: [],
      /** 
       * 自定义级联选择器的一些配置项，效果将作用于每一级，无可以每一级独立配置的途径
       * todo emitpath的值，实践下来未发现有啥生效的作用
       * */
      cascaderProps: { emitpath: false, label: 'label', value: 'value', children: 'children', leaf: 'leaf', disabled: 'disabled', multiple: false },
      /** 可选项 */
      options: [{
        value: 'zhinan',
        label: '指南',
        leaf: true, /** 表示是否是叶子节点，字段名取决于props的配置 */
        disabled: false, /** 表示是否禁止选择，字段名取决于props的配置 */
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          leaf: false,
          disabled: false,
          children: [{
            value: 'yizhi',
            label: '一致',
            leaf: true,
            disabled: false
          }, {
            value: 'fankui',
            label: '反馈',
            leaf: true,
            disabled: false
          }, {
            value: 'xiaolv',
            label: '效率',
            leaf: true,
            disabled: true
          }, {
            value: 'kekong',
            label: '可控',
            leaf: true,
            disabled: false
          }]
        }, {
          value: 'daohang',
          label: '导航',
          leaf: false,
          disabled: false,
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航',
            leaf: true,
            disabled: false
          }, {
            value: 'dingbudaohang',
            label: '顶部导航',
            leaf: true,
            disabled: false
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        leaf: false,
        disabled: false,
        children: [{
          value: 'basic',
          label: 'Basic',
          leaf: false,
          disabled: false,
          children: [{
            value: 'layout',
            label: 'Layout 布局',
            leaf: true,
            disabled: false
          }, {
            value: 'color',
            label: 'Color 色彩',
            leaf: true,
            disabled: false
          }, {
            value: 'typography',
            label: 'Typography 字体',
            leaf: true,
            disabled: false
          }]
        }, {
          value: 'form',
          label: 'Form',
          leaf: false,
          children: [{
            value: 'radio',
            label: 'Radio 单选框',
            leaf: true,
            disabled: false
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框',
            leaf: true,
            disabled: false
          }, {
            value: 'input',
            label: 'Input 输入框',
            leaf: true,
            disabled: false
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        leaf: false,
        disabled: true,
        children: [{
          value: 'axure',
          label: 'Axure Components',
          leaf: true,
          disabled: false
        }, {
          value: 'sketch',
          label: 'Sketch Templates',
          leaf: true,
          disabled: false
        }, {
          value: 'jiaohu',
          label: '组件交互文档',
          leaf: true,
          disabled: false
        }]
      }, {
        value: 'nothing',
        label: '只有一级的情况',
        leaf: true,
        disabled: false
      }]
    }
  },
  methods: {
    /** 选择改变事件 */
    handleChange(value) {
      /** 
       * 值为从第一级到选中那一级的value构成的数组
       * 级数=数组长度
       */
      console.log(value)
      console.log(this.selectedItem)
    },
    getCascaderCheckedNode() {
      /**
       * getCheckedNodes 级联选择器自带的方法，可以用来获取选中的节点的完整数据，而不只是value
       * 参数：leafOnly，默认false。只在允许多选时才有意义，此时将排除多选时涉及的非叶子节点的节点（若一个节点的所有子节点都选中(忽略被禁用的无法选中的节点)，则该节点也会被返回）。
       * 是否时叶子节点的判定，与leaf的属性设置无关，应该是依据有无子节点来判定
       */
      let leafOnlyCheckedNode = this.$refs.cascaderExample.getCheckedNodes(true)
      let notLeafOnlyCheckedNode = this.$refs.cascaderExample.getCheckedNodes(false)
      console.log('Leaf Only: ')
      console.log(leafOnlyCheckedNode)
      console.log('Not Leaf Only: ')
      console.log(notLeafOnlyCheckedNode)
    }
  }
}
</script>

<style>
  /**
    因为浮层不属于这个组件，所以CSS不能设置为scoped，否则样式定义会失效
    cascaderClass是自定义浮层类名，主要用来定位级联选择器弹出来的浮层的元素，然后可以用来自定义样式
    其实因为不能使用scoped，所以也是用来和其他组件的样式做区分，毕竟这时候样式是作用域全局的
    例如这里是针对弹出来的每个选择项定义最小宽度
  */
  .cascaderClass .el-cascader-menu {
    min-width: 200px !important;
  }
</style>