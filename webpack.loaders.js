const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = [

  // Js

  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: "babel-loader",
  },

  // Css
  // > Non-local & local css

  {
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader"],
    }),
  },
  {
    test: /\.css$/,
    exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: [
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
          },
        },
        {
          loader: "postcss-loader",
        },
      ],
    }),
  },
  {
    test: /\.(scss)$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },

  // Fonts

  {
    test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
    exclude: /(src\/assets\/images)/,
    loader: "url-loader",
    options: {
      limit: 100000,
      name: "[name].[ext]",
    },
  },

  // Images
  {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
      },
  {
    test: /\.(webm)$/,
    use: [
      "file-loader",

    ],
    include: path.join(__dirname, "src"),
  },

  {
    test: /\.svg$/,
    include: /(src\/assets\/images)/,
    loader: "raw-loader",
  },


];
