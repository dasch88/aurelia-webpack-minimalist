const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = { 
  entry: { "main": "aurelia-bootstrapper" },  // (1)

  output: {                                   // (2)
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "[name].js",    
    chunkFilename: "[name].js",
  },

  resolve: {                                  // (3)
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"],
  },

  module: {                                   // (4)
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.js$/i, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: "html-loader" },
    ]
  },  

  plugins: [
    new AureliaPlugin({
        root: path.resolve(),
        src: path.resolve('src'),
        baseUrl: '/'
    }),                       // (5)
  ],
};