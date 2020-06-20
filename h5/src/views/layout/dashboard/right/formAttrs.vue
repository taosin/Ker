<template>
  <div class="form-attrs">
    <el-form ref="form" :model="form" label-width="80px">
        <!-- size -->
      <el-form-item label="数据对象">
        <el-input v-model="form.object"></el-input>
      </el-form-item>
      <el-form-item label="行内模式">
          <el-checkbox v-model="form.inline"></el-checkbox>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-select v-model="form.position" placeholder="请选择对齐方式">
          <el-option :label="item.label" :value="item.value" v-for="item in positionList" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标签宽度">
        <el-slider v-model="form.width"></el-slider>
      </el-form-item>
      <el-form-item label="组件尺寸">
        <el-select v-model="form.size" placeholder="请选择组件尺寸">
          <el-option :label="item.label" :value="item.value" v-for="item in sizeList" :key="item.value"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        object: "",
        inline: false,
        position: "left",
        width: 50,
        size: "medium"
      },
      positionList:[
          {label:'左对齐',value: 'left'},
          {label:'右对齐',value: 'right'},
          {label:'顶部对齐',value: 'top'},
      ],
      sizeList:[
          {label:'普通',value: 'medium'},
          {label:'小',value: 'small'},
          {label:'迷你',value: 'mini'},
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
</style>