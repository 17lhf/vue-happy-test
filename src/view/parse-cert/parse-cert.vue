<template>
  <div class="parseCert">
    <h1>本页面为展示如何在前端解析证书</h1>
    <p>第一步（安装库，网站参考：http://www.npmdoc.org/jsrsasignzhongwenwendangjsrsasign-jszhongwenjiaochengjiexi.html）：<B>npm i jsrsasign</B></p>
    <p>第二步（阅读API文档，找到你想要的方法）：https://kjur.github.io/jsrsasign/api/index.html</p>
    <p>第三步：仔细阅读本示例代码及注释内容</p>
    <el-upload
      class="uploadFile"
      ref="upload"
      drag
      action="aa"
      :on-change="onChange"
      :auto-upload="false"> <!-- 文件只需要到达浏览器然后运算即可，不需要到达后端，所以这里不需要上传到某个地址, 也不需要自动上传到服务器 -->
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将要文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip line-height-none" slot="tip">推荐文件最大不超过10M</div>
    </el-upload>
  </div>
</template>

<script>
  import { X509 } from 'jsrsasign'
  export default {
    data () {
      return {
      }
    },
    methods: {
      onChange (file) {
        // console.log(file.raw) // file.raw才是真实的文件对象，从中可以获取很多文件的信息
        let reader = new FileReader()

        // 定义证书对象
        let cert = new X509()

        reader.onload = function () {
          // 这里的reader.result就是文件的文本格式内容
          // console.log(reader.result)

          // 将PEM格式的证书数据读取到证书对象中
          // 经过测试，这个读取pem格式证书的方法，也支持读取 附带有证书内容的PEM格式证书
          cert.readCertPEM(reader.result)
          // 打印证书的subject各个字段信息
          // ds表示编码格式，type表示是哪个字段，value表示字段的值
          cert.getSubject().array.forEach(e => {
            console.log('ds: ' + e[0].ds + ', type: ' + e[0].type + ', value: ' + e[0].value)
            }
          )
        }
        reader.readAsText(file.raw)
      }
    }
  }
</script>

<style>
</style>