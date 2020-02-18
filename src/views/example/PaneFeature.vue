<template>
  <div class="pane_feature">
    <el-card shadow="none">
      <el-row class="word_clouds" type="flex" justify="space-around">
        <el-col v-for="(image, index) in wordClouds" :key="index" :span="6">
          <el-image fit style="width: 100%" :src="image" :preview-src-list="wordClouds"> </el-image>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="gap-l" shadow="none">
      <div class="table">
        <el-alert show-icon title="点击箭头可展开示例" type="info" :closable="false"> </el-alert>

        <el-table
          class="gap table-inner"
          :data="tableData"
          :header-cell-style="{ 'background-color': '#f5f7fa' }"
        >
          <el-table-column type="expand">
            <template #default="scope">
              <ul class="relevant_news">
                <li
                  class="relevant_news-item"
                  v-for="(title, index) in scope.row.highlightedTitles"
                  :key="index"
                >
                  <span v-html="title"></span>
                </li>
              </ul>
            </template>
          </el-table-column>
          <el-table-column type="index" label="TOP" width="96px"></el-table-column>
          <el-table-column prop="types" label="类别" width="144px"></el-table-column>
          <el-table-column prop="proportion" label="标题党新闻占比 (每100条)"></el-table-column>
          <el-table-column prop="feature_words" label="标题词特征">
            <template #default="scope">
              <el-tag
                style="margin-right: 6px"
                size="small"
                v-for="(tag, index) in scope.row.featureWordLabels"
                :key="index"
                >{{ tag }}</el-tag
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { reqFetchFeatures } from '../../api/main';
import _ from 'lodash';

export default {
  name: 'PaneFeature',

  data() {
    return {
      wordClouds: [
        require('@/assets/images/society_title.png'),
        require('@/assets/images/entertainment_title.png'),
        require('@/assets/images/healthy_title.png')
      ],
      tableData: []
    };
  },

  methods: {
    init() {
      this.getFeatures();
    },
    async getFeatures() {
      const { data } = await reqFetchFeatures();

      this.tableData = _.sortBy(data.news2, 'top').map(feature => {
        feature.featureWordLabels = feature.feature_words.split('、');
        feature.originalRelevantTitles = [
          feature.relevant_title_1,
          feature.relevant_title_2,
          feature.relevant_title_3
        ];
        feature.highlightedTitles = _.cloneDeep(feature.originalRelevantTitles).map(title => {
          let result = title;
          feature.featureWordLabels.forEach(word => {
            result = result.replace(word, `<span style="color: #F56C6C">${word}</span>`);
          });

          return result;
        });

        return feature;
      });

      console.log(this.tableData);
    }
  }
};
</script>

<style scoped lang="scss">
.pane_feature {
  .table {
    &-inner {
      .relevant_news {
        margin: 0;
        padding: 0 0 0 12px;

        &-item {
          font-size: 14px;
          margin-top: 8px;
          margin-bottom: 8px;

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
