var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'out/[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin('out/[name].css')
  ]
};
