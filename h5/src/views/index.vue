<template>
  <div class="index-view">
    <el-container>
      <el-aside width="300px">
        <h1>Vue Code Maker</h1>
        <sider></sider>
      </el-aside>
      <el-container>
        <el-header>
          <top />
        </el-header>
        <el-main>
          <el-container>
            <div class="main-area">
              <workMeta />
            </div>
            <el-aside class="aside-in-main">
              <right />
            </el-aside>
          </el-container>
        </el-main>
        <el-footer height="30px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sider from "@/components/dashboard/sider";
import top from "@/components/dashboard/header";
import workMeta from "@/components/dashboard/workmeta";
import right from '@/components/dashboard/right/index'
export default {
  data() {
    return {};
  },
  components: {
    sider,
    top,
    workMeta,
    right
  }
};
</script>

<style lang="less" scoped>
.el-header {
  border-bottom: 1px solid;
  color: #333;
  line-height: 60px;
}
.el-footer {
  border-top: 1px solid;
}
.el-container {
  height: 100%;
  .el-aside {
    border-right: 1px solid;
    padding: 10px;
  }
  .el-main {
    padding: 0px;
    .aside-in-main {
      border-left: 1px solid;
      position: absolute;
      right: 0;
      top: 60px;
      bottom: 30px;
      width: 200px;
    }
  }
  .main-area{
    position: absolute;
    left: 300px;
    top: 60px;
    right: 300px;
    bottom: 30px;
    overflow: hidden;
  }
}
</style>