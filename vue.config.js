// 参考：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    // 本质式进行API请求代理，实际可以用于解决跨域问题的代理配置
    proxy: {
      '/proxy': {  // 被代理的接口需要以 /proxy 开头
        target: 'https://yokila.com',  // 目标地址
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''       // 把原路径的 /proxy 变为 空
        }
      }
    }
  }
})
