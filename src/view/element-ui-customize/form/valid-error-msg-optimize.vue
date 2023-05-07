<template>
  <!-- 优化后 -->
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="optimize-form">
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        // 模拟报错提示很长的情况
        return callback(new Error('年龄不能为空, 请任意填入一些数字，只要不是很离谱的数字，都是允许输入的，不过还是希望可以尽量填写真实年龄哦！所以请认认真真地填写吧！'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            // 模拟报错提示很长的情况
            callback(new Error('必须年满18岁，低于18岁是不被允许的，必须成年才行。不管你是哪个国家的，都是这个要求，没有任何的区别哦！'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
/* 以下样式为解决报错提示适应小屏幕问题的额外定制样式 */
.optimize-form >>> .is-error {
  margin-bottom: 5px;
}
.optimize-form >>> .el-form-item__content .el-form-item__error {
  position: static !important;
  text-align: left; /* 因为样式会继承父组件样式，可能会导致出问题，所以这里进行统一限制 */
  line-height: normal !important; /* 因为样式会继承父组件样式，可能会导致出问题，所以这里进行统一限制 */
}
</style>
