<template>
  <div class="workmeta">
      <div class="main">
          <h1>拖拽或添加组件到此处</h1>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .workmeta{
        height: 100%;
        overflow-y: auto;
        .main{
            margin: 10px;
            border: 1px dashed;
            overflow: auto;
            min-height: 85vh;
        }
    }
</style>