<template>
  <div
    :is="item.name"
    v-bind="item.props"
    :class="item.name == 'el-form-item' ? 'component-item':''"
  >
    <draggable
      v-model="item.children"
      :group="{name:'cmps', put: false}"
      :sort="true">
      <template v-for="(child,index) in item.children">
        <componentItem :item="child" :key="index"></componentItem>
      </template>
      {{item.text}}
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "componentItem",
  props: ["item"],
  components: {
    draggable
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.component-item {
  border: 1px solid #fff;
}
.component-item:hover {
  border: 1px solid #409EFF;
}
</style>