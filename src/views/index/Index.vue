<template>
  <div class="index">
    <div class="header">标题党文章识别</div>

    <el-divider></el-divider>

    <el-card class="overviews" shadow="hover" header="数据总览">
      <el-row>
        <el-col class="column" v-for="(overview, index) in overviews" :key="index" :span="8">
          <div class="overview">
            <div class="overview-label">{{ overview.label }}</div>
            <div class="overview-value">{{ overview.value }}</div>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="gap ratio" shadow="hover" header="标题党新闻各类别占比总览"> </el-card>

    <el-row class="gap" type="flex" :gutter="12">
      <el-col class="categories" :span="12">
        <el-card shadow="hover" header="标题党常见类型">132</el-card>
      </el-col>
      <el-col class="word_cloud" :span="12">
        <el-card shadow="hover" header="高频特征词总览">dasda</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {
      overviews: window.GLB_CONFIG.dataOverviews
    };
  }
};
</script>

<style lang="scss" scoped>
.index {
  .header {
    font-weight: bold;
    font-size: 24px;
    color: #555;
  }

  .overviews {
    .column {
      border-right: 1px solid #ddd;

      &:last-child {
        border-right: 0;
      }

      .overview {
        &-label {
          color: #666;
          text-align: center;
        }

        &-value {
          text-align: center;
          font-weight: bold;
          font-size: 24px;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
