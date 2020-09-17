const webpackMerge = require('webpack-merge');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  // Feel free to modify this webpack config however you'd like to
  return webpackMerge.smart(singleSpaWebpackConfig, {
    // Remove library that are part of the import-map to reduce micro-app size
    externals: {
      'single-spa': 'single-spa',
    }
  });
}
