<template>
  <div class="readAnsi">
    <h1>读取ANSI编码文件</h1>
    <p>内容将以HEX字符串形式打印到控制台</p>
    <el-upload
      class="uploadFile"
      ref="upload"
      drag
      action="aa"
      :on-change="onChange"
      :auto-upload="false"> <!-- 文件只需要到达浏览器然后运算即可，不需要到达后端，所以这里不需要上传到某个地址, 也不需要自动上传到服务器 -->
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">ASNI编码文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip line-height-none" slot="tip">推荐文件最大不超过10M</div>
    </el-upload>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      onChange (file) {
        // console.log(file.raw) // file.raw才是真实的文件对象，从中可以获取很多文件的信息
        let reader = new FileReader()

        // onload：文件读取成功完成后触发
        reader.onload = function (e) {
          // 获取文件内容作为ArrayBuffer
          const arrayBuffer = e.target.result
          console.log('ArrayBuffer length: ' + arrayBuffer.length)
          // 将ArrayBuffer转换为Uint8Array
          const uint8Array = new Uint8Array(arrayBuffer)
          console.log('Uint8Array length: ' + uint8Array.length)
          // 将Uint8Array转换为十六进制字符串
          const hexString = uint8Array.reduce((acc, val) => acc + ('00' + val.toString(16)).slice(-2), '')
          // 打印十六进制字符串
          console.log('Hex String:', hexString)
          console.log('Hex String Length:', hexString.length)
        }
        // 以数组形式读取，读取为异步的
        reader.readAsArrayBuffer(file.raw)
      }
    }
  }
</script>

<style>
</style>