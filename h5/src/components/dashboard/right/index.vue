<template>
  <div class="right">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="tab.label" :name="tab.name" v-for="(tab, index) of tabs" :key="index">
          <formAttrs/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import formAttrs from "./formAttrs";
export default {
  components: {
    formAttrs
  },
  data() {
    return {
      tabs: [
        { label: "控件属性", name: "field" },
        { label: "表单属性", name: "form" }
      ],
      activeName: "field"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>