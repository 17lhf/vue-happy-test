<template>
  <div>
    <p>先安装依赖：<b>npm install file-saver</b></p>
    <p>地址：https://github.com/eligrey/FileSaver.js</p>
    <br />

    <div>
      <p>可能存在跨域问题：参考解决：https://zhuanlan.zhihu.com/p/628263030</p>
      <p>跨域问题的解决，可以参考 vue.config.js 的配置</p>
      <p>目前输入的图片地址必须为 /proxy 开头，https://yokila.com 上的图才不会触发CORS问题(当心这个地址的图片是有做防盗链的)</p>
      <el-input v-model="imgUrl" placeholder="请输入内容" :clearable=true class="inputWidth"></el-input>
      <el-button @click="downloadImg">点击下载URL所指图片</el-button>
    </div>

    <br />
    
    <el-radio-group v-model="downloadMethod">
      <el-radio :label="1">下载Excel文件</el-radio>
      <el-radio :label="2">下载CSV文件</el-radio>
      <el-radio :label="3">下载JPG图片</el-radio>
      <el-radio :label="4">保存证书文件</el-radio>
    </el-radio-group>
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
import fileSave from '@/view/file/file-save/file-save.js'
export default {
  data() {
    return {
      imgUrl: '',
      downloadMethod: 1
    }
  },
  methods: {
    // 输入URL下载图片
    downloadImg () {
      fileSave.downloadImgByURL(this.imgUrl, 'urlImg')
    },
    // 上传文件时对文件进行下载
    onChange (file) {
        // console.log(file.raw) // file.raw才是真实的文件对象，从中可以获取很多文件的信息
        let reader = new FileReader()
        let _this = this

        // onload：文件读取成功完成后触发
        reader.onload = function () {
          // 这里的reader.result就是文件的字节数组格式内容
          // console.log(reader.result)
          // console.log(typeof(_this.downloadMethod))

          // 区分不同文件的下载处理
          switch(_this.downloadMethod) {
            case 1:
              fileSave.downloadExcel(reader.result, 'excelExample')
              break
            case 2:
              fileSave.downloadCsv(reader.result, 'csvExample')
              break
            case 3:
              fileSave.downLoadJpgImg(reader.result, 'jpgExample')
              break
            default:
              fileSave.downloadCert(reader.result, 'certExample')
          }
        }

        // 以字节数组形式读取形式读取
        // 读取为异步的
        reader.readAsArrayBuffer(file.raw)
      }
  }
}
</script>

<style scoped>
  .inputWidth {
    width: 200px;
    margin-right: 20px;
  }
</style>