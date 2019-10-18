<template>
  <div class="workmeta">
    <div class="main">
      <div class="empty">
        <h1>拖拽或添加组件到此处</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.workmeta {
  height: 100%;
  overflow-y: auto;
  .main {
    margin: 10px;
    border: 1px dashed;
    overflow: auto;
    min-height: -webkit-fill-available;
    .empty {
      display: flex;
      align-items: center;
      width: 100%;
      height: -webkit-fill-available;
      justify-content: center;
      background-color: #dedede;
    }
  }
}
</style>