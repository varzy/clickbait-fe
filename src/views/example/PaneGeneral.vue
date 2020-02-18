<template>
  <div class="pane_general">
    <div class="category" v-for="(category, index) in categories" :key="index">
      <div class="header">{{ index + 1 }}. {{ category.header }}</div>
      <div class="table">
        <el-table :header-cell-style="{ 'background-color': '#f5f7fa' }" :data="category.tableData">
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="链接" width="180px">
            <template #default="scope">
              <a class="link" :href="scope.row.url" target="_blank">新闻原文链接 </a>
            </template>
          </el-table-column>
          <el-table-column prop="source" label="来源" width="180px"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { reqFetchNews } from '../../api/main';
import _ from 'lodash';

export default {
  name: 'PaneGeneral',

  data() {
    return {
      categories: [
        { header: '题文不符误导型', tableData: [] },
        { header: '低俗恶俗炒作型', tableData: [] },
        { header: '制造噱头煽动型', tableData: [] },
        { header: '热点人事挂靠型', tableData: [] }
      ]
    };
  },

  methods: {
    init() {
      this.getNews();
    },
    async getNews() {
      const { data } = await reqFetchNews();
      const showingNewsList = data.news1.slice(0, 12);
      const chunkedNewsList = _.chunk(showingNewsList, 3);

      this.categories = this.categories.map((category, index) => {
        category.tableData = chunkedNewsList[index];
        return category;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.pane_general {
  .category {
    margin-top: 36px;
    margin-bottom: 36px;

    &:first-child {
      margin-top: 12px;
    }

    &:last-child {
      margin-bottom: 12px;
    }

    .header {
      font-weight: bold;
      color: #666;
    }

    .table {
      padding-left: 36px;
      margin-top: 12px;
    }

    .link {
      color: $g-color-primary;

      &:hover {
        color: #0063ff;
      }
    }
  }
}
</style>
