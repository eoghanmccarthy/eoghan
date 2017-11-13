const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
    './src/js/index.js',
    './src/scss/main.scss'
  ],
	devServer : {
    publicPath: '/assets/',
    contentBase: path.join(__dirname, '/dist'),
    watchContentBase: true,
    historyApiFallback: true
  },
	output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/asset/',
    filename: 'bundle.js'
  },
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-class-properties',
              'transform-es2015-classes',
              'transform-object-rest-spread'
            ]
          }
        }
      },
			{
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            'style-loader',
            'css-loader'
          ]
        })
      },
			{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
							loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                config: {
                  path: './postcss.config.js'
                },
                plugins: (loader) => [
                  require('autoprefixer')()
                ]
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './dist/assets/media/'
            }
          }
        ]
      }
    ]
  },
	plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: false,
      allChunks: true
    })
  ]
};
