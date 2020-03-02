const path = require('path')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  chainWebpack: (config) => {
    if (config.plugins.has(ImageminPlugin)) {
      config.plugin(ImageminPlugin)
        .tap((args) => ([
          ...args,
          {
            pngquant: {
              quality: '95-100',
            },
            test: /\.(jpe?g|png|gif|svg)$/i,
          },
        ]))
    }
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@assets', path.resolve(__dirname, 'src/assets'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@styles', path.resolve(__dirname, 'src/styles'))
    config.module
      .rule('scss')
      .test(/\.scss$/)
      .oneOf('normal')
      .use('sass')
      .loader('sass-loader')
      .end()
      .end()
  },
}
