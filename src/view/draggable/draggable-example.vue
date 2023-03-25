<template>
  <div>
    <p><B>需要先安装模块：</B>npm i -S vuedraggable</p>
    <p>参考网站： <a href="https://www.itxst.com/vue-draggable/tutorial.html" target="_blank">点击前往</a></p>
    <p>以下为使用多选框展示拖动功能</p>
    <el-checkbox-group v-model="checkedList" style="margin-top:10px">h
      <draggable v-model="itemList" @end="handleDraggableEnd()" @start="handleDraggableStart()" :move="onMove">
        <transition-group>
          <el-checkbox v-for="item in itemList" :label="item.id" :key="item.id" border>
            {{item.name}}
          </el-checkbox>
        </transition-group>
      </draggable>
    </el-checkbox-group>
    <el-button @click="viewChecked" style="margin-top:10px">查看选中情况</el-button>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data() {
    return {
      itemList: [
        {id: 1, name: '复选框1'},
        {id: 2, name: '复选框2'},
        {id: 3, name: '复选框3'},
        {id: 4, name: '复选框4'},
        {id: 5, name: '复选框5'}
      ],
      checkedList: []
    }
  },
  components: {
    draggable
  },
  methods: {
    viewChecked() {
      console.log('全部：' + this.itemList)
      console.log('已选中项：' + this.checkedList)
    },
    handleDraggableStart() {
      console.log('拖动开始')
    },
    handleDraggableEnd() {
      console.log('拖动结束')
    },
    //禁止拖动到id为1的对象(就是被交换对象是id=1时，拖动无效)
    onMove(e){
      if(e.relatedContext.element.id == 1) return false
      return true
    }
  }
}
</script>

<style>
</style>