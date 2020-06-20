<template>
  <div class="empty">
    {{ emptyText }}
  </div>
</template>

<script>
export default {
  props: {
    emptyText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.empty {
  display: flex;
  align-items: center;
  width: 100%;
  height: -webkit-fill-available;
  justify-content: center;
  background-color: #dedede;
}
</style>
