<template>
  <div :is="item.name" v-bind="item.props" :class="item.name == 'el-form-item' ? 'component-item' : ''">
    <draggable v-model="item.children" :group="{ name: 'unit', pull: 'move', put: true }" :sort="true" :component-data="getComponentData()">
      <template v-for="(child, index) in item.children">
        <componentItem :element="child" :key="index"></componentItem>
      </template>
      {{ item.text }}
    </draggable>
  </div>
</template>

<script>
export default {
  name: 'componentItem',
  props: ['element'],
  components: {
    draggable: () => import('vuedraggable'),
  },
  data() {
    return {}
  },
  computed: {
    item: {
      get() {
        return this.element
      },
      set(val) {
        debugger
      },
    },
  },
  methods: {
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged,
        },
        attrs: {
          wrap: true,
        },
        props: {
          value: this.activeNames,
        },
      }
    },
    handleChange() {
      console.log('changed')
    },
    inputChanged(value) {
      debugger
    },
  },
}
</script>

<style lang="less" scoped>
.component-item {
  border: 1px dashed #409eff;
  padding: 5px;
}
.component-item:hover {
  border: 1px dashed red;
}

/deep/ .el-form-item {
  margin-bottom: 5px;
}
</style>
