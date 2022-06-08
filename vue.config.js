const { defineConfig } = require("@vue/cli-service");
const configureAPI = require("./src/srv/configure");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "src/main.js",
      title: "RPI's System Monitor",
      //publicPath: "http://192.168.187.244/rpi-monitor/", //Should only be on in productions
    },
  },
  configureWebpack: {
    devServer: {
      before: configureAPI,
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

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: "./src/srv",
    },
  },
});
