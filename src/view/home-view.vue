<template>
  <div class="hello">
    <div>
      <span>前端进行密码学操作：</span><router-link to="/cryptography">点击前往</router-link>
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
      <span>样式定制主页面：</span><router-link to="/style-home">点击前往</router-link>
    </div>
    <div>
      <span>拖拽示例：</span><router-link to="/draggable-example">点击前往</router-link>
    </div>
    <div>
      <span>Element-UI组件定制化示例：</span><router-link to="/element-ui-customize">点击前往</router-link>
    </div>
    <div>
      <span>后端一些测试实例所需的前端内容：</span><router-link to="/backend">点击前往</router-link>
    </div>
    <div>
      <span>动画示例：</span><router-link to="/animation">点击前往</router-link>
    </div>
    <div>
      <span>文件操作示例：</span><router-link to="/fileShow">点击前往</router-link>
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
  .hello div {
    margin-bottom: 10px;
  }
</style>
