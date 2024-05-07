<template>
  <!-- 此页面包含关于文件操作的示例 -->
  <div>
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="文件保存" name="fileSave">
        <file-save-show></file-save-show>
      </el-collapse-item>

      <!-- <el-collapse-item title="" name="">
      </el-collapse-item> -->

    </el-collapse>
  </div>
</template>

<script>
import FileSaveShow from './file-save/file-save-show.vue'
export default {
  data() {
    return {
      activeName: ''
    }
  },
  components: {
    FileSaveShow
  },
  methods: {
  }
}
</script>

<style>
</style>
