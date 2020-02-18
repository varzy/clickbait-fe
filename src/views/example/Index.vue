<template>
  <div class="example">
    <el-card class="tabs" shadow="hover">
      <el-tabs lazy v-model="activeTab" @tab-click="tab => setActiveTab(tab.name)">
        <el-tab-pane label="常见类型" name="general">
          <pane-general ref="paneGeneral"></pane-general>
        </el-tab-pane>

        <el-tab-pane label="类型特征" name="feature">
          <pane-feature ref="paneFeature"></pane-feature>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import PaneGeneral from './PaneGeneral';
import PaneFeature from './PaneFeature';

export default {
  name: 'Example',

  components: { PaneGeneral, PaneFeature },

  data() {
    return {
      activeTab: 'general',
      isGeneralPaneInited: false,
      isFeaturePaneInited: false
    };
  },

  mounted() {
    this.setActiveTab('general');
  },

  methods: {
    setActiveTab(tabName) {
      if (tabName === 'general' && !this.isGeneralPaneInited) {
        this.$refs.paneGeneral.init();
        this.isGeneralPaneInited = true;
      }

      if (tabName === 'feature' && !this.isFeaturePaneInited) {
        this.$refs.paneFeature.init();
        this.isFeaturePaneInited = true;
      }
    }
  }
};
</script>
