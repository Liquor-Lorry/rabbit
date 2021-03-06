const path = require("path");

module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      // 这里放置你的需要自动引入的文件，使用绝对路径
      patterns: [
        path.join(__dirname, "./src/assets/styles/variables.less"),
        path.join(__dirname, "./src/assets/styles/mixins.less"),
      ],
    },
  },
};
