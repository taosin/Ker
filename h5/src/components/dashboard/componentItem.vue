<template>
  <div :is="item.name" v-bind="item.props">
    <template v-for="(child,index) in item.children">
      <componentItem :item="child" :key="index"></componentItem>
    </template>
    {{item.text}}
  </div>
</template>

<script>
export default {
  name: "componentItem",
  props: ["item"],
  data() {
    return {};
  }
};
</script>