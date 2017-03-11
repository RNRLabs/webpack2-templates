const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),

  entry: [ './index.js', './index.html' ],

  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [ './app', 'node_modules' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: "file-loader?name=[name].[ext]"
      },
    ],
  },
}