const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {

  if (env.development) {
    console.log('desarrollo');
  } else {
    console.log('production');
  }

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpg)$/i,
          type: 'asset',
          generator: {
            filename: 'static/images/[hash][ext]',
          },
        },
        {
          test: /\.s?css$/i,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'sass-loader',
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'static/styles/[name].css',
      }),
      new Dotenv({
        path: `./.env.${env.development ? 'development' : 'production'}`,
        systemvars: true,
      }),
      new CopyPlugin({
        patterns: [
          {
            from: './public/netlify.toml',
            to: './netlify.toml',
          },
        ],
      }),
    ],
  };

};
