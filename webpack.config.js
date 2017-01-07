const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/app.ts',
    vendor: [
      // 'react',
      'lodash',
      'moment',
      // 'react-dom',
      // 'classnames',
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-bundle.js', Infinity),
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
        exclude: [
            /vendor\/.+\.js/
        ]
    }),
    // Stop the infinite locales from being loaded
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    // new CircularDependencyPlugin({
    //   exclude: /a\.js/
    // })
    new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
  ],
  devtool: 'eval',
  output: {
    path: 'js/',
    filename: '[name]-bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      // { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.json?$/, loader: 'json-loader' },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};