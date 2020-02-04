const fs = require('fs')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          // Import Mixins
          @import "@/scss/_mixins.scss";
        `
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./dev/example.com+5-key.pem'),
  //     cert: fs.readFileSync('./dev/example.com+5.pem')
  //   },
  //   public: 'https://192.168.2.104:8080/'
  // }
}