import merge from 'webpack-merge';
import webpack from 'webpack';

import defaultConfig from './webpack.config.babel';

export default merge(defaultConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
