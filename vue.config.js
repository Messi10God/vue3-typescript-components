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