<template>
  <div class="view">
    <componentItem :key="index" :item="item" v-for="(item, index) in items"></componentItem>
  </div>
</template>

<script>
import componentItem from "./componentItem";
export default {
  components: {
    componentItem
  },
  data() {
    return {
      items: [
        {
          name: "el-form",
          props: {
            "label-width": "180px",
            "label-position": "rigth"
          },
          children: [
            {
              name: "el-form-item",
              props: {
                label: "姓名",
                value: "3131"
              },
              children: [
                {
                  name: "el-input",
                  props: { type: "textarea", size: "large", value: "3131", 'v-model':'sddsds' },
                  text: "username"
                }
              ]
            },
            {
              name: "el-form-item",
              props: {
                label: "请选择请选择请选择请选择"
              },
              children: [
                {
                  name: "el-select",
                  props: {
                    size: "small",
                    placeholder: "请选择",
                    'v-model': "type",
                    value:'1'
                  },
                  children: [
                    {
                      name: "el-option",
                      text: "选项一",
                      props: {
                        value: "type"
                      }
                    },
                    {
                      name: "el-option",
                      text: "选项e",
                      props: {
                        value: "2"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.view {
  width: 100%;
  height: 100%;
}
</style>