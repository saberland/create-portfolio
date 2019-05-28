module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'custom-properties': false
      }
    })
  ]
}
