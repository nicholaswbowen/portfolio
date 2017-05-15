var path = require('path');
module.exports = {
  cache: true,
  entry: {
    main: './client/app/app.module.ts'
  },
  output: {
    path: __dirname + '/../client/dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      rules: ['awesome-typescript-loader']
    },
    {
     test: /\.scss$/,
     rules: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
  ],
  devtool: "source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx']
  },
};