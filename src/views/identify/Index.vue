<template>
  <div class="identify">
    <el-card class="form" header="输入新闻内容" shadow="hover">
      <el-form ref="form" label-width="96px" :model="form" :rules="formRules">
        <el-form-item label="新闻标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="新闻内容" prop="content">
          <el-input
            type="textarea"
            v-model="form.content"
            placeholder="请输入内容"
            :autosize="{
              minRows: 4,
              maxRows: 24
            }"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-monitor" @click="onIdentify"
            >标题党识别</el-button
          >
          <el-button type="primary" icon="el-icon-brush" @click="onGenerate">标题生成</el-button>
          <el-button plain icon="el-icon-refresh-left" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-divider></el-divider>

    <el-collapse-transition>
      <el-card
        class="identify_inner gap"
        v-show="visible.identify"
        shadow="hover"
        v-loading.lock="loading.identifying"
        header="标题党可能性"
      >
        <div class="possibility">{{ verified.possibility * 100 }}%</div>
        <div class="result">{{ verified.result }}</div>
      </el-card>
    </el-collapse-transition>

    <el-collapse-transition>
      <el-card
        class="generate gap"
        v-show="visible.generate"
        shadow="hover"
        v-loading.lock="loading.generating"
        header="标题生成"
      >
        <div class="title">{{ verified.newTitle }}</div>
      </el-card>
    </el-collapse-transition>
  </div>
</template>

<script>
import { reqVerifyNews } from '../../api/main';

export default {
  name: 'Identify',

  data() {
    return {
      visible: {
        identify: false,
        generate: false
      },
      loading: {
        identifying: false,
        generating: false
      },
      form: {
        title: '',
        content: ''
      },
      formRules: {
        title: [{ required: true, message: '请输入新闻标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入新闻标题', trigger: 'blur' }]
      },
      verified: {
        newTitle: '',
        possibility: 0,
        result: ''
      }
    };
  },

  methods: {
    async onIdentify() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }

      try {
        this.visible.identify = true;
        this.loading.identifying = true;

        const data = await this.onVerify();

        this.verified.possibility = data.posibility;
        this.verified.result = data.result;
      } finally {
        this.loading.identifying = false;
      }
    },
    async onGenerate() {
      try {
        await this.$refs.form.validate();
      } catch {
        return;
      }

      try {
        this.visible.generate = true;
        this.loading.generating = true;

        const data = await this.onVerify();

        this.verified.newTitle = data.new_title;
      } finally {
        this.loading.generating = false;
      }
    },
    async onVerify() {
      const res = await reqVerifyNews({
        title: this.form.title,
        content: this.form.content
      });

      return res.data;
    },
    onReset() {
      this.form.title = '';
      this.form.content = '';
      this.$refs.form.resetFields();
      this.$refs.form.clearValidate();
    }
  }
};
</script>

<style scoped lang="scss">
.identify {
  .form {
    /deep/ .el-card__header {
      font-weight: bold;
    }
  }

  .identify_inner {
    .possibility {
      font-size: 32px;
    }

    .result {
      color: #666;
    }
  }
}
</style>
