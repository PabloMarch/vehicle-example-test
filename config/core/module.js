import path from 'path';
import { PATHS, PRESET } from './setup';

export default {
  rules: [
    {
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      include: path.resolve(__dirname, PATHS.app),
      use: [
        {
          loader: 'eslint-loader'
        },
        {
          loader: 'babel-loader',
          options: {
            presets: PRESET,
            cacheDirectory: true
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|gif|svg|woff|woff2)$/,
      use: [
        {
          loader : 'url-loader',
          options: {
            name: '[path][name].[ext]',
            context: PATHS.app,
            limit: 10000
          }
        }
      ]
    },
    {
      test: /\.(mp4|ogg)$/,
      use: [
        'file-loader'
      ]
    }
  ]
};
