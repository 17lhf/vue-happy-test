<template>
  <div class="parseCert">
    <h1>本页面为展示如何在前端解析证书</h1>
    <p>第一步（安装库，网站参考：http://www.npmdoc.org/jsrsasignzhongwenwendangjsrsasign-jszhongwenjiaochengjiexi.html）：<B>npm i jsrsasign</B></p>
    <p>第二步（阅读API文档，找到你想要的方法）：http://kjur.github.io/jsrsasign/api/symbols/X509.html</p>
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

        // onload：文件读取成功完成后触发
        reader.onload = function () {
          // 这里的reader.result就是文件的文本格式内容
          // console.log(reader.result)

          // 将PEM格式的证书数据读取到证书对象中
          // 经过测试，这个读取pem格式证书的方法，也支持读取 附带有证书内容的PEM格式证书
          // 注意：如果证书文件里放了多本证书内容，则会读取最上面那一本（可能），所以解析时请保留文件内容里只有一个证书内容，以避免读取数据错误
          cert.readCertPEM(reader.result)

          // 证书版本号，1=X509v1没有扩展字段，3=X509v3才有扩展字段
          let certVersion = cert.getVersion()
          console.log('Cert version:' + certVersion)
          console.log('')

          // 打印证书的序列号
          console.log('Serial Number: ' + cert.getSerialNumberHex())
          console.log('')

          // 打印证书的issuer信息
          console.log('Issuer: ' + cert.getIssuerString())
          console.log('')

          // 打印证书的subject信息
          console.log('Subject: ' + cert.getSubjectString())
          cert.getSubject().array.forEach(e => {
            // ds表示编码格式，type表示是哪个字段，value表示字段的值
            console.log('ds: ' + e[0].ds + ', type: ' + e[0].type + ', value: ' + e[0].value)
            }
          )
          console.log('')

          // 打印证书的有效期
          console.log('Not before: ' + cert.getNotBefore())
          console.log('Not after: ' + cert.getNotAfter())
          console.log('')
          
          // 开始读取扩展字段
          if (certVersion === 3) {
            // 获取证书 Basic Constraints 字段值
            // 注意：API文档说9.0.0版本返回的对象和先前的格式有差异
            const basicConstraints = cert.getExtBasicConstraints() 
            console.log('Basic Constraints: ' + basicConstraints)
            // console.log(basicConstraints)
            if (basicConstraints != undefined) {
              console.log('Basic Constraints Critical: ' + basicConstraints.critical)
              // 实测发现，如果是末端证书，这个值会是undefinded，目前没有测出过false的情况
              console.log('Basic Constraints isCA: ' + basicConstraints.cA)
              // 即便是CA，也经常不设置这个值，所以很可能为undefinded
              console.log('Basic Constraints pathLen: ' + basicConstraints.pathLen)
              for (const key in basicConstraints) {
                if (Object.prototype.hasOwnProperty.call(basicConstraints, key)) {
                  const value = basicConstraints[key];
                  console.log(`Basic Constraints Key: ${key}, Value: ${value}`);
                }
              }
            } else {
              console.log('Basic Constraints is undefined')
            }
            console.log('')
          }
        }

        // 以文本形式读取，第二个参数是文本的编码方式，默认值为 UTF-8
        // 读取为异步的
        reader.readAsText(file.raw)
      }
    }
  }
</script>

<style>
</style>