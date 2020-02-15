<template>
  <div class="example">
    <el-card class="tabs" shadow="hover">
      <el-tabs lazy v-model="activeTab">
        <el-tab-pane label="常见类型" name="general"></el-tab-pane>

        <el-tab-pane label="类型特征" name="feature">
          <pane-feature ref="paneFeature"></pane-feature>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { reqFetchNews } from '../../api/main';
import PaneFeature from './PaneFeature';

export default {
  name: 'Example',

  components: { PaneFeature },

  data() {
    return {
      activeTab: 'general',
      isFeaturePaneInited: false
    };
  },

  created() {
    this.getNews();
  },

  methods: {
    async getNews() {
      const res = await reqFetchNews();
      console.log(res.data);
    }
    // handleTabClicked(tab) {
    //   if (tab.name === 'feature' && !this.isFeaturePaneInited) {
    //     this.$refs.paneFeature.init();
    //     this.isFeaturePaneInited = true;
    //   }
    // }
  }
};
</script>
