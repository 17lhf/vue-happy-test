<template>
  <!-- 此页面包含关于前端进行密码学操作的示例 -->
  <div>
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="通过文件上传的UI组件，展示前端解析数字证书" name="parseCert">
        <parse-cert></parse-cert>
      </el-collapse-item>

      <el-collapse-item title="通过spark-md5计算md5" name="md5">
        
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script>
import ParseCert from '@/view/cryptography/parse-cert/parse-cert.vue'
export default {
  data() {
    return {
      activeName: ''
    }
  },
  components: {
    ParseCert
  },
  methods: {
  }
}
</script>

<style>
</style>
