const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
    watch: true, // watch enabled
    entry: ['./src/app.scss', './src/app.ts'],
    output: {
			// set output location to static from dist for hugo
			path: path.resolve(__dirname, 'static'),
			filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                // Prefer Dart Sass
                implementation: require('sass'),
  
                // See https://github.com/webpack-contrib/sass-loader/issues/804
                webpackImporter: false,
                sassOptions: {
                    includePaths: ['./node_modules']
                  },
              },
            },
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
    // minify bundeld js
    optimization: {
      minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      })],
    }
  }];