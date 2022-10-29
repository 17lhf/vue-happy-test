<template>
  <div class="uploadFiles">
    <h1>本页面为展示如何通过前端上送多个文件到服务端接口</h1>
    <p>注意，需要配合后端服务使用</p>
    <div style="margin-bottom: 10px">
      <el-upload
        class="uploadFile"
        ref="upload"
        drag
        multiple
        :action="uploadAddr"
        :on-change="onChange"
        :on-remove="onRemove"
        :on-exceed="onExceed"
        :disabled="uploading"
        :file-list="fileList"
        :auto-upload="false"
        :limit="3"> <!-- 自动的话，文件就直接去服务端的文件路径了，这里是要手动上传文件 -->
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将要文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip line-height-none" slot="tip">推荐文件最大不超过10M，最多不超过3个文件</div>
      </el-upload>
    </div>
    <el-button type="primary" @click="upload" :disabled="uploading">确认上传文件到服务端</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 此处写localhost，会导致axios报错
      // 错误信息：AxiosError: Unsupported protocol localhost:\n    at dispatchXhrRequest......
      uploadAddr: 'upload-file/files',
      uploading: false, // true 正在上传文件，false 正常状态，可以拖动文件到el-upload组件中
      fileList: [], // 上传文件列表
      fileNameList: [] // 上传文件名列表
    }
  },
  methods: {
    // 选取文件到el-upload组件触发的事件
    onChange (file, fileList) {
      // 这里做同名文件的上传限制主要是因为后端存储规划需要依据实际情况确定
      // 实际可允许也可以不允许
      if (this.fileNameList.includes(file.name)) {
        this.$message.error('不可以上传同名文件')
        // 把upload组件里的这个文件的数据删除掉，不然文件列表里还是会有这个数据
        this.$refs['upload'].uploadFiles.splice(this.$refs['upload'].uploadFiles.indexOf(file), 1)
      } else {
        this.fileList = fileList
        this.fileNameList.push(file.name)
      }
      // 打印查看组件里的文件列表
      // console.log(this.$refs['upload'].uploadFiles)
      // 打印查看记录的数据信息情况
      // console.log(this.fileList)
      // console.log(this.fileNameList)
    },
    // 文件列表移除文件时触发的事件
    onRemove (file, fileList) {
      this.fileList = fileList
      this.fileNameList.splice(this.fileNameList.indexOf(file.name), 1)
    },
    // 选择的文件超出限制数时的事件
    onExceed () {
      this.$message.warning('限制最多同时上传3个文件，当前文件选择已超出3个！')
    },
    // 上传文件到服务端
    upload () {
      // FormData 对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据。其主要用于发送表单数据，但亦可用于发送带键数据 (keyed data)，而独立于表单使用
      // 说明： https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects
      this.uploading = true
      let fileRawData = new FormData()
      this.fileList.forEach(e => {
        // 这个key名要和后端的@RequestParam的value值对应
        fileRawData.append('files', e.raw)
      })
      // 实例化一个axios对象，用于发送请求
      let http = axios.create({
        baseURL: 'http://127.0.0.1:12312/happyTest/',
        timeout: 3000,
        headers: {}
      })
      // 正式向服务端发送文件数据
      http.post(this.uploadAddr, fileRawData, {
        headers: {} // 这里可以附带上请求头
      }).then(({data}) => {
        this.uploading = false
        if(data && data.code === 0) {
          this.fileList = []
          this.fileNameList = []
          // 清空已上传的文件列表（该方法不支持在 before-upload 中调用）
          this.$refs['upload'].clearFiles()
          this.$message.success('上传文件成功')
        } else {
          // 此时没有清空页面的文件数据，若有需要，自行添加清空处理逻辑
          this.$message.error('上传文件失败')
        }
      })
    }
  }
}
</script>

<style>
</style>