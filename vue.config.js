const fs = require('fs')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          // Import Mixins
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./dev/example.com+5-key.pem'),
  //     cert: fs.readFileSync('./dev/example.com+5.pem')
  //   },
  //   public: 'https://192.168.2.104:8080/'
  // }
}