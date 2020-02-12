module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/resources.scss";`
      }
    }
  }
};
