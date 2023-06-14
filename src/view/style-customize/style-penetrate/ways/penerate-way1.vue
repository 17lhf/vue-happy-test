<template>
  <el-dialog
    title="方式1"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <p>利用样式穿透将选中后显示在方框中的文字换一个颜色</p>
    <el-select v-model="value" placeholder="请选择" class="selectExample">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
    init () {
      this.dialogVisible = true
    },
    handleClose() {
      this.$confirm('确认关闭？', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          })
        }
      }).then(() => {
        this.dialogVisible = false
      })
    }
  }
}
</script>

<style scoped>
  /** 将选中后显示在方框中的文字换一个颜色 */
  .selectExample >>> .el-input__inner {
    color: blue;
  }
</style>