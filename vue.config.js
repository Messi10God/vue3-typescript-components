const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/styles/index.less')]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    module:{
        rules:[{
            test:/\.mjs$/,
            include:/node_modules/,
            type:'javascript/auto'
        }]
    }
  }
}