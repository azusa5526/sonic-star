const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(resolve('./src/assets/icon')).end();

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
      .end();
  }
};
