<template>
  <div>
    <h1>本页面为展示如何在前端利用crypto-js进行摘要生成</h1>
    <p>第一步（安装库，网站参考：https://www.npmjs.com/package/crypto-js）：<B>npm install crypto-js</B></p>
    <p>第二步（阅读API文档，找到你想要的方法）：https://cryptojs.gitbook.io/docs</p>
    <p>第三步：仔细阅读本示例代码及注释内容</p>
    <p>注意：警惕空字符串和空格也是能计算摘要的。</p>

    <div class="item">
      <el-input v-model="value1" placeholder="请输入内容" :clearable=true class="inputWidth"></el-input>
      <el-button @click="generateMd5">生成MD5摘要</el-button>
      <p>{{ value1Md5 }}</p>
    </div>

    <div class="item">
      <el-input v-model="value2" placeholder="请输入内容" :clearable=true class="inputWidth"></el-input>
      <el-button @click="generateSha1">生成SHA1摘要</el-button>
      <p>{{ value2Sha1 }}</p>
    </div>

    <div class="item">
      <el-input v-model="value3" placeholder="请输入内容" :clearable=true class="inputWidth"></el-input>
      <el-button @click="generateSha256">生成SHA256摘要</el-button>
      <p>{{ value3Sha256 }}</p>
    </div>

    <div class="item">
      <el-input v-model="value4" placeholder="请输入第一部分内容" :clearable=true class="inputWidth"></el-input>
      <el-input v-model="value5" placeholder="请输入第二部分内容" :clearable=true class="inputWidth"></el-input>
      <el-button @click="progressiveSha256">多段内容组合生成SHA256摘要</el-button>
      <p>{{ value45Sha256 }}</p>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      value1: '',
      value1Md5: '',
      value2: '',
      value2Sha1: '',
      value3: '',
      value3Sha256: '',
      value4: '',
      value5: '',
      value45Sha256: ''
    }
  },
  methods: {
    /**
     * 计算MD5摘要，并且转换为Base64编码
     */
    generateMd5 () {
      this.value1Md5 = CryptoJS.MD5(this.value1).toString(CryptoJS.enc.Base64)
    },
    /**
     * 计算SHA1摘要，并且转换为HEX字符串
     */
    generateSha1 () {
      this.value2Sha1 = CryptoJS.SHA1(this.value2).toString(CryptoJS.enc.Hex)
    },
    /**
     * 计算SHA256摘要，并且转换为HEX字符串
     */
     generateSha256 () {
      this.value3Sha256 = CryptoJS.SHA256(this.value3).toString(CryptoJS.enc.Hex)
    },
    /**
     * 分段计算SHA256摘要，并且转换为HEX字符串
     */
     progressiveSha256 () {
      let sha256 = CryptoJS.algo.SHA256.create()
      sha256.update(this.value4)
      sha256.update(this.value5)
      this.value45Sha256 = sha256.finalize().toString(CryptoJS.enc.Hex)
    }
  }
}
</script>

<style scoped>
  .item {
    margin-top: 15px;
  }
  .inputWidth {
    width: 200px;
    margin-right: 20px;
  }
</style>