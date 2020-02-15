<template>
  <div class="pane_feature">
    <el-row type="flex" justify="space-around">
      <el-col v-for="(col, index) in images" :key="index" :span="Math.floor(24 / col)">
        <img :src="col" alt="feature words cloud" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PaneFeature',

  data() {
    return {
      images: []
    };
  }
};
</script>
