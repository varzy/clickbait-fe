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

    <el-card class="gap ratio" shadow="hover" header="标题党新闻各类别占比总览">
      <div class="chart">
        <div id="ring"></div>
      </div>
    </el-card>

    <el-row class="gap line_3rd" type="flex" :gutter="12">
      <el-col :span="12">
        <el-card class="categories" shadow="hover" header="标题党常见类型">
          <div class="content">
            <div class="content-inner">
              <div
                class="category"
                v-for="(category, index) in commonCategories"
                :key="index"
                :style="{ 'background-color': category.bgc }"
              >
                {{ category.label }}
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="word_cloud" shadow="hover" header="高频特征词总览">
          <div class="chart">
            <div id="word_cloud"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Ring, WordCloud } from '@antv/g2plot';

export default {
  name: 'Index',

  data() {
    return {
      overviews: window.GLB_CONFIG.dataOverviews,
      categoryRatios: window.GLB_CONFIG.categoryRatios,
      commonCategories: window.GLB_CONFIG.commonCategories,
      featureWords: window.GLB_CONFIG.featureWords
    };
  },

  mounted() {
    this.renderCategoryRatios();
    this.renderFeatureWords();
  },

  methods: {
    renderCategoryRatios() {
      const ring = new Ring(document.getElementById('ring'), {
        forceFit: true,
        data: this.categoryRatios,
        angleField: 'quantity',
        colorField: 'name',
        legend: {
          position: 'right-center'
        },
        label: {
          visible: true,
          type: 'spider'
        }
      });

      ring.render();
    },
    renderFeatureWords() {
      const wordCloud = new WordCloud(document.getElementById('word_cloud'), {
        forceFit: true,
        data: this.featureWords.map((word, index) => ({
          word: word.label,
          weight: word.weight,
          id: index
        })),
        wordStyle: {
          rotation: [-Math.PI / 4, Math.PI / 2],
          rotateRatio: 0.5,
          rotationSteps: 4,
          shadowColor: '#333',
          shadowBlur: 10,
          gridSize: 8
        },
        tooltip: {
          visible: true
        },
        color: () => {
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
        }
      });

      wordCloud.render();
    }
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

  .ratio {
    .chart {
      max-width: 640px;
      margin: 0 auto;
    }
  }

  .line_3rd {
    display: flex;

    .categories {
      height: 100%;

      /deep/ .el-card__body {
        padding: 0;
        height: calc(100% - 55px);
      }

      .content {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &-inner {
          .category {
            padding: 10px 24px;
            color: #fff;
            margin-top: 10px;
            border-radius: 12px;
            font-weight: bold;

            &:first-child {
              margin-top: 0;
            }
          }
        }
      }
    }

    .word_cloud {
      height: 100%;

      /deep/ .el-card__body {
        padding: 0;
        height: calc(100% - 55px);
      }
    }
  }
}
</style>
