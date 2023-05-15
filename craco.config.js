const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "assets": resolve("src/assets")
    }
  }
}