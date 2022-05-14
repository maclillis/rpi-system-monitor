const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "RPI's System Monitor",
    },
  },
  transpileDependencies: true,
});
