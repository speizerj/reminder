module.exports = {
  entry: "./app/App.jsx",
  output: {
    filename: "bundle.js",
    path: "./public/"
  },
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: {
      index: '/'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}