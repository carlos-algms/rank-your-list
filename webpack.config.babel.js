import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const SRC_PATH = path.resolve('src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(SRC_PATH, 'index.html'),
  filename: 'index.html',
  inject: 'body'
});


export default {
  entry: path.join(SRC_PATH, 'index.jsx'),

  output: {
    path: path.resolve('dist'),
    filename: 'index-bundle-[hash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.resolve('.eslintrc-development.js')
        }
      },
      {
        test: /\.jsx*$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]',
                minimize: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  autoprefixer
                ])
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
    ],
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('[name]-[hash].min.css')
  ]
};
