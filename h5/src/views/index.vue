<template>
  <div class="index-view">
    <el-container>
      <el-aside width="300px">
          <h1>Vue Code Maker</h1>
          <sider></sider>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sider from '@/components/sider'
export default {
  data() {
    return {};
  },
  components:{
      sider
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
//   background: rgba(5, 64, 208, .8);
    background: linear-gradient(to right,rgba(5, 64, 208, .5),rgba(5, 64, 208, .8),rgba(5, 64, 208, .5),rgba(5, 64, 208, .6));
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
    background: none;
}
.el-container {
  height: 100%;
  .el-aside{
      border-right: 1px solid;
      padding: 10px;
  }
  .el-main{
    //   border: 1px solid;
  }
}
</style>