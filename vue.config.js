const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js",
      title: "RPI's Monitor",
      publicPath: process.env.VUE_APP_RPI_PATH, //Should only be on in productions
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "src/assets/style/_variables.scss";
                         @import "src/assets/style/base.scss";`,
      },
    },
  },

  transpileDependencies: true,
});
