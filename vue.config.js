module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/css-transform-simulator/'
    : '/',
  outputDir: 'docs'
}
