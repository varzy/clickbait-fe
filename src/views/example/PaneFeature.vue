<template>
  <div class="pane_feature">
    <el-row type="flex" justify="space-around">
      <el-col :span="6" style="height: 300px">
        <canvas id="word_cloud_1st"></canvas>
      </el-col>
      <el-col :span="6">
        <canvas id="word_cloud_2nd"></canvas>
      </el-col>
      <el-col :span="6">
        <canvas id="word_cloud_3rd"></canvas>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import WordCloud from 'wordcloud';
import $ from 'jquery';
import { windowResize } from '../../utils/helpers';

export default {
  name: 'PaneFeature',

  data() {
    return {
      wordCloudIds: ['1st', '2nd', '3rd']
    };
  },

  methods: {
    async init() {
      await this.$nextTick();
      this.renderWordClouds();

      this.resizeWordClouds();
      windowResize(() => {
        this.resizeWordClouds();
      });
    },
    renderWordClouds() {
      WordCloud(
        document.getElementById('word_cloud_1st'),
        this.generateWordCloudOption('word_cloud_1st', [
          ['谈笑风生', 2],
          ['谈笑风生', 3],
          ['谈笑风生', 4],
          ['谈笑风生', 5],
          ['谈笑风生', 6],
          ['谈笑风生', 12],
          ['谈笑风生', 2],
          ['谈笑风生', 3],
          ['谈笑风生', 4],
          ['谈笑风生', 5],
          ['谈笑风生', 6],
          ['谈笑风生', 12],
          ['谈笑风生', 2],
          ['谈笑风生', 3],
          ['谈笑风生', 4],
          ['谈笑风生', 5],
          ['谈笑风生', 6],
          ['谈笑风生', 12],
          ['谈笑风生', 2],
          ['谈笑风生', 3],
          ['谈笑风生', 4],
          ['谈笑风生', 5],
          ['谈笑风生', 6],
          ['谈笑风生', 12],
          ['谈笑风生', 2],
          ['谈笑风生', 3],
          ['谈笑风生', 4],
          ['谈笑风生', 5],
          ['谈笑风生', 6],
          ['谈笑风生', 12]
        ])
      );
    },
    generateWordCloudOption(eleId, list, otherOptions = {}) {
      return {
        gridSize: 18,
        weightFactor: 4,
        color: function() {
          const arr = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3'
          ];
          return arr[Math.floor(Math.random() * (arr.length - 1))];
        },
        rotateRatio: 0.2,
        rotationSteps: 2,
        backgroundColor: '#fbf4f9',
        list,
        ...otherOptions
      };
    },
    resizeWordClouds() {
      $('#word_cloud_1st').width(
        $('#word_cloud_1st')
          .parent()
          .width()
      );
      $('#word_cloud_1st').height(
        $('#word_cloud_1st')
          .parent()
          .height()
      );
    }
  }
};
</script>
