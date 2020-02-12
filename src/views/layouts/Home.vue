<template>
  <el-container class="home">
    <el-aside class="home-aside" width="228px">
      <el-menu
        class="home-aside-menu"
        background-color="#304156"
        text-color="#ccc"
        active-text-color="#409EFF"
        :default-active="activeMenu"
        @select="handleMenuSelected"
      >
        <el-menu-item index="Index">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="Example">
          <i class="el-icon-s-management"></i>
          <span slot="title">标题党典例</span></el-menu-item
        >
        <el-menu-item index="Identify">
          <i class="el-icon-s-check"></i>
          <span slot="title">标题党识别</span></el-menu-item
        >
      </el-menu>
    </el-aside>

    <el-main class="home-body">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      activeMenu: 'Index'
    };
  },

  methods: {
    handleMenuSelected(index) {
      this.$router.push({ name: index });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow: hidden;

  &-aside {
    z-index: 501;
    box-shadow: 4px 0 8px rgba(0, 21, 41, 0.35);

    &-menu {
      height: 100%;
      border-right: 0;
    }
  }

  &-body {
    background-color: #f0f2f5;
    min-height: 100vh;
  }
}
</style>
