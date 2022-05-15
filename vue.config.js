const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js",
      title: "RPI's System Monitor",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/style/_variables.scss";
                         @import "~@/assets/style/base.scss";`,
      },
    },
  },
  transpileDependencies: true,
});
