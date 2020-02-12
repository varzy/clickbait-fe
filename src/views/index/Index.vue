<template>
  <div class="index">
    <el-card class="info" shadow="hover">
      <div class="title">标题党文章识别</div>
      <el-divider></el-divider>
      <div class="subtitle">识别标题党新闻，还公众新闻真相!</div>
      <ul>
        <li>权威数据来源</li>
        <li>精准模型分析</li>
      </ul>
    </el-card>

    <el-card class="gap detail" shadow="hover">
      <div class="rows">
        <div class="row" v-for="(row, index) in detail" :key="index">
          <div class="row-label">{{ row.label }}：</div>
          <div class="row-value">{{ row.value }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {
      detail: [
        { label: '姓名', value: '吴姣灿' },
        { label: '年级', value: '研三' },
        { label: '学号', value: 'xxx' },
        { label: '手机号', value: '15555555555' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.index {
  .info {
    .title {
      font-size: 24px;
      font-weight: bold;
    }

    .subtitle {
      color: #666;
    }
  }

  .rows {
    display: table;

    .row {
      display: table-row;
      height: 36px;
      letter-spacing: 1.2px;

      &-label {
        display: table-cell;
        vertical-align: middle;
        width: 96px;
        color: #333;
      }

      &-value {
        display: table-cell;
        vertical-align: middle;
        color: #595959;
      }
    }
  }
}
</style>
