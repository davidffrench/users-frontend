module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  }
};