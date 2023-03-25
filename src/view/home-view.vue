<template>
  <div class="hello">
    <div>
      <span>通过文件上传的UI组件，展示前端解析数字证书：</span><router-link to="/parse-cert">点击前往</router-link>
    </div>
    <div>
      <span>与后端对接的多文件上传：</span><router-link to="/upload-file">点击前往</router-link>
    </div>
    <div>
      <span>Echart包装组件使用示例：</span><router-link to="/echart-use-example">点击前往</router-link>
    </div>
    <div>
      <span>Excel操作工具方法使用示例：</span><router-link to="/excel-use-example">点击前往</router-link>
    </div>
    <div>
      <span>样式穿透示例：</span><router-link to="/style-penetrate-example">点击前往</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
