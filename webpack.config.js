const path = require('path');
const entry = path.resolve(__dirname, './client/index.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // uncomment this line when ready for Production
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  }, 
  devServer: {
    contentBase: [
      path.resolve(__dirname, '/build'),
      path.resolve(__dirname + '/client/assets'),
      path.resolve(__dirname + '/client/public'),
    ],
    historyApiFallback: true,
    proxy: {
      '/auth/*': 'http://localhost:3000',
      '/api/*': 'http://localhost:3000',
    },
    hot: true,
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client', 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'client', 'assets', 'favicon.png')
    }),
  ],
};
