const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /.less$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "less-loader",
        },],
      },
      {
        test: /.css$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        },],
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
}
