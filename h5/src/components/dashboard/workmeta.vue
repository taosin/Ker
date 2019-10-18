<template>
  <div class="workmeta">
    <div class="main">
      <componentItems v-if="datas.length" />
      <div class="empty" v-else>
        {{emptyText}}
      </div>
    </div>
  </div>
</template>

<script>
import componentItems from "./componentItems";
export default {
  components: {
    componentItems
  },
  data() {
    return {
      datas: [1],
      emptyText: "拖拽或添加组件到此处"
    };
  }
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