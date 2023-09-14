const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./public/index.html",
 filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index_bundle.js',
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [{
     test: /\.js$/,
     exclude: /node_modules/,
     use: {
       loader: "babel-loader"
     }
   },
    {
     test: /\.css$/,
     use: ["style-loader", "css-loader"]
    }
  ]},
   plugins: [htmlPlugin]
  };