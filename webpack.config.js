require('dotenv').config();;;;;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const BabiliPlugin = require("babili-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const sourcePath = path.join(__dirname, "./src");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const API_HOST = process.env.API_HOST;
const ENV_VARS = process.env;
const defines = Object.keys(ENV_VARS)
  .reduce((env, key) => {
    const val = JSON.stringify(ENV_VARS[key]);
    env[key.toUpperCase()] = val;
    return env;
  }, {
    NODE_ENV: JSON.stringify(ENV),
  });
const isProd = ENV === "production";
const cssDev = ["style-loader", "css-loader", "postcss-loader"];
const cssProd = ExtractTextPlugin.extract(
  {
    fallback: "style-loader",
    use: ["css-loader", "postcss-loader"],
  });
const cssConfig = isProd ? cssProd : cssDev;


const entry = ((env) => {
  switch (env) {
    case "test": return path.join(__dirname, "./tests/index.js");
    default: return "./src/App.js";
  }
})(ENV);


const output = ((env) => {
  switch (env) {
    // case "production": return "[chunkhash].js";
    case "test": return "tests.js";
    default: return "bundle.js";
  }
})(ENV);


const plugins = (() => {
  const always = [
    new HtmlWebpackPlugin({
      title: "InterWide Courier Services",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: path.join(__dirname, "./src/index.html"),
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: !isProd,
      allChunks: true,
    }),
    new webpack.DefinePlugin(defines),
  ];

  if (isProd) {
    return [
      ...always,
        new WebpackCleanupPlugin(),
      new UglifyJSPlugin(),

    ];
  }
  return [
    ...always,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          drop_console: true,
          drop_debugger: true,
        },
      }),

  ];
})();


module.exports = {
  entry,
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: output,
    publicPath: "/",
  },

  // loaders
  module: {
    rules: require("./webpack.loaders"),
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "node_modules"), sourcePath],
    aliasFields: ["browser"],
    alias: {
      Components: path.resolve(__dirname, "./src/components/"),
      Assets: path.resolve(__dirname, "./src/assets/"),
      Styles: path.resolve(__dirname, "./src/styles/"),
      Utils: path.resolve(__dirname, "./src/utils/"),
    },
  },

  // plugins

  plugins,
  // devserver
  node: {
    fs: "empty",
  },
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    port: PORT || 3000,
    hot: true,
    stats: "minimal",
    historyApiFallback: true,
  },
}
  ;
