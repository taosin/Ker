<template>
  <div
    :is="item.name"
    v-bind="item.props"
    :class="item.name == 'el-form-item' ? 'component-item':''"
  >
    <draggable
      v-model="item.children"
      :group="{name:'items', pull: 'clone', put: true}"
      @change="changeEvent"
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
  },
  methods:{
    changeEvent(event){
      debugger
    }
  }
};
</script>

<style lang="less" scoped>
.component-item {
  border: 1px dashed #409EFF;
  padding: 5px;
}
.component-item:hover {
  border: 1px dashed #409EFF;
}
</style>