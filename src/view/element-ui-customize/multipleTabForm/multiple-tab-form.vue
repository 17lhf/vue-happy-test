<template>
  <div>
    <el-tabs v-model="activeTab" ref="tabs">

      <el-tab-pane label="表单-one" name="tabOne">
        <el-form ref="formOne" :model="formOne" :rules="rulesOne">
          <!-- 表单1内容 -->
          <el-form-item label="字段1" prop="one">
            <el-input v-model="formOne.one"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="表单-Two" name="tabTwo">
        <el-form ref="formTwo" :model="formTwo" :rules="rulesTwo">
          <!-- 表单2内容 -->
          <el-form-item label="字段2" prop="two">
            <el-input v-model="formTwo.two"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>

    </el-tabs>

    <el-button type="primary" @click="submitForm">提交</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'tabOne',
      formOne: {
        one: ''
      },
      formTwo: {
        two: ''
      },
      rulesOne: {
        one: [
          { required: true, message: '请输入字段1', trigger: 'blur' }
        ]
      },
      rulesTwo: {
        two: [
         { required: true, message: '请输入字段2', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    /**
     * 校验表单
     * @param formName 表单名称
     * @param tabName 选项卡名称
     */
    validateForm(formName, tabName) {
      return new Promise((resolve, reject) => {
        if (this.$refs[formName]) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              resolve() // 校验通过
            } else {
              reject({ formName, tabName }) // 校验失败，返回 formName 和 tabName
            }
          })
        } else { // 此处必须调用，否则Promise会卡在pending状态，不执行后续的其他动作
          console.log('未找到对应的表单 ${formName}')
          resolve() // 如果没有找到对应的表单，则直接返回成功
        }
      })
    },
    // 提交表单
    submitForm() {
      // Promise.all() 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
      // 此时将并行处理多个 Promise 实例，它会等待所有 Promise 完成，或立即终止（如果某个 Promise 失败）。
      // 只要有一个 Promise 失败，整个 Promise.all 立即终止，进入 .catch
      Promise.all([ 
        this.validateForm('notExistForm', null),
        this.validateForm('formOne', 'tabOne'),
        this.validateForm('formTwo', 'tabTwo')
      ])
      .then(() => {
        // 所有表单校验通过
        console.log('所有表单校验通过')
      })
      .catch((error) => {
        // 捕获未通过校验的表单信息，如果有多个表单未通过校验，这里只会捕获第一个失败的信息
        console.log(`未通过校验的表单：${error.formName}  tabName: ${error.tabName}`)
        // 自动跳转到失败的选项卡，方便用户定位问题
        this.activeTab = error.tabName
      })
    }
  }
}
</script>

<style>

</style>