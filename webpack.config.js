module.exports = {
  entry: './src',
  output: {
    path: __dirname,
    filename: './dist/index.js'
  },
  devtool: 'source-map',
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
}; 

