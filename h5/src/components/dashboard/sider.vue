<template>
  <div class="sider">
    <el-collapse v-model="activeNames" @change="handleChange">
      <template v-for="(list,m) of datas">
        <el-collapse-item :title="list.title" :name="list.name" :key="m">
          <draggable
            v-model="list.children"
            :group="{name:'unit', pull: 'clone', put: false}"
            :sort="false">
            <template v-for="(item,n) of list.children">
              <el-tag :key="n" style="margin:3px;cursor: move" hit>{{item.title}}</el-tag>
            </template>
          </draggable>
        </el-collapse-item>
      </template>
    </el-collapse>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  data() {
    return {
      activeNames: ["form", "data"],
      datas: [
        {
          title: "表单类",
          name: "form",
          children: [
            {
              title: "单选框",
              name: "radio"
            },
            {
              title: "多选框",
              name: "checkbox"
            },
            {
              title: "输入框",
              name: "input"
            },
            {
              title: "选择器",
              name: "select"
            },
            {
              title: "时间日期选择器",
              name: "datetimepicker"
            },
            {
              title: "开关",
              name: "switch"
            },
            {
              title: "滑块",
              name: "slider"
            },
            {
              title: "评分",
              name: "rate"
            },
            {
              title: "上传",
              name: "upload"
            }
          ]
        },
        {
          title: "数据类",
          name: "data",
          children: [
            {
              title: "表格",
              name: "table"
            }
          ]
        },
        {
          title: "通知类",
          name: "notice",
          children: [
            {
              title: "警告",
              name: "alert"
            }
          ]
        },
        {
          title: "导航类",
          name: "navigation",
          children: [
            {
              title: "导航菜单",
              name: "menu"
            }
          ]
        },
        {
          title: "其它",
          name: "others",
          children: [
            {
              title: "对话框",
              name: "dialog"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style>
</style>