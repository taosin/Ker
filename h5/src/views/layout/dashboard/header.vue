<template>
  <div class="header">
    <el-button type="default">{{ $t('common.save') }}</el-button>
    <el-button type="default">导入 JSON 文件</el-button>
    <el-button type="primary">预览</el-button>
    <el-button type="success">导出</el-button>
    <el-dropdown @command="handleCommand">
      <span>{{ currentLanguage }}</span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lan: '',
    }
  },
  computed: {
    currentLanguage() {
      return this.$t('common.language')
    },
  },
  methods: {
    handleCommand(lan) {
      this.lan = lan
      this.$i18n.locale = lan
    },
  },
}
</script>

<style></style>
