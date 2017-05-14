var path = require('path');
module.exports = {
  cache: true,
  entry: {
    main: './client/app/app.module.ts',
    vendor: [
      'babel-polyfill'
    ]
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
      loader: 'ts-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2016', 'es2015']
      }
    },
    {
     test: /\.scss$/,
     rules: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  plugins: [
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
};