<template>
  <div class="loadingBtn">
    <button @click="loadingAction">
      <span class="fontClass">切换加载中动画有无</span>
      <span :class="loading ? 'loadingIcon' : ''"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    // 转换加载中的动画有无
    loadingAction() {
      this.loading = !this.loading
    }
  }
}
</script>

<style scoped>
  .loadingBtn button {
    margin: 20px 0;
    padding: 15px 0;
    font-size: 20px; /** 大小 >= 加载中图标高度，避免加载中图标出现时按钮的高度发生变化 */
    width: 300px;
    border: none;
    color: #ffffff;
    background:#fe2c55;
    display: flex;
    justify-content: center;
  }
  .fontClass {
    margin-right: 10px;
  }
  .loadingIcon {
    width: 17px;
    height: 17px;
    border: 3px solid #FFFFFF;
    border-bottom: 3px solid #CCCCCC;
    border-radius: 50%;
    /* 
      将动画与标签绑定，这里绑定到选择器的keyframe是load
      规定完成动画需要的时间为 animation-duration = 1s
      动画从头到尾的速度是匀速：animation-timing-function = linear
      规定动画应该无限次播放: animation-iteration-count = infinite
    */
    animation: load 1s linear infinite;
  }
  /* 依靠css样式的不断变化，创建动画 */
  @keyframes load {
    from { /* 动画开始时间 */
      transform: rotate(0deg); /* 定义2D旋转，在参数中规定角度。*/
    }
    to { /* 动画结束时间 */
      transform: rotate(360deg);
    }
  }
</style>