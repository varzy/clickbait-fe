<template>
  <div class="example">
    <el-card class="tabs" shadow="hover">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="常见类型" name="general"></el-tab-pane>

        <el-tab-pane label="类型特征" name="feature"></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Example',

  data() {
    return {
      activeTab: 'general'
    };
  }
};
</script>
