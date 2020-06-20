<template>
  <div class="workmeta">
    <div class="main">
      <template v-if="datas.length">
        <componentItems id="_workspace" />
      </template>
      <Empty v-else :emptyText="emptyText" />
    </div>
  </div>
</template>

<script>
import componentItems from "./componentItems";
import Empty from "./Empty";
export default {
  components: {
    componentItems,
    Empty,
  },
  data() {
    return {
      datas: [1],
      emptyText: "拖拽或添加组件到此处",
    };
  },
};
</script>

<style lang="less" scoped>
.workmeta {
  height: 100%;
  overflow-y: auto;
  .main {
    margin: 10px;
    border: 1px dashed;
    overflow: auto;
    padding: 10px;
    min-height: -webkit-fill-available;
  }
}
</style>
