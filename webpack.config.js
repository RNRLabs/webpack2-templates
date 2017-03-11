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
        use: [
          { loader: "react-hot-loader" },
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          { loader: "file-loader", query: { name: "[name].[ext]" } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", query: { sourceMaps: true } },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
}