const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // 这里的选项会传递给 css-loader
        // prependData: '@import "~@/assets/scss/base.scss";',
        additionalData: '@import "~@/assets/scss/base.scss";',
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
          }),
          require('autoprefixer')()
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api':{
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
})

