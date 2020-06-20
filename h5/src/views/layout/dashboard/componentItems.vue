<template>
  <div class="view">
    <componentItem :key="index" :element="item" v-for="(item, index) in items"></componentItem>
    <!-- <draggable v-model="items" group="people" @start="drag = true" @end="drag = false">
      <div v-for="element in items" :key="element.id">{{ element.name }}</div>
    </draggable> -->
  </div>
</template>

<script>
import componentItem from './componentItem'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    componentItem,
    draggable: () => import('vuedraggable'),
  },
  data() {
    return {}
  },
  computed: {
    items: {
      get() {
        return this.$store.state.layout.elements
      },
      set(value) {
        this.updateElements(value)
      },
    },
  },
  methods: {
    ...mapActions(['updateElements']),
  },
}
</script>

<style lang="less" scoped>
.view {
  width: 100%;
  height: 100%;
}
</style>
