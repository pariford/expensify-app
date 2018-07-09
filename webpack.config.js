//entry point, output file
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
//You can either create an object or return the properties using a function as well

module.exports = env => {
  console.log("env", env);
  const isProduction = env;
  const CSSExtract = new MiniCSSExtractPlugin({ filename: "styles.css" });
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          use: { loader: "babel-loader" },
          //which kind of files to be transformed by the loader specified using regular expression
          test: /\.js$/,
          //excludes all those files where the files need not to be transformed
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          /* use: ["style-loader", "css-loader", "sass-loader"] */
          //Style-loader is not required as it is used for handling inlining of the style
          use: [
            MiniCSSExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [CSSExtract],
    node: {
      fs: "empty"
    },
    mode: "production",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
/* module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: { loader: "babel-loader" },
        //which kind of files to be transformed by the loader specified using regular expression
        test: /\.js$/,
        //excludes all those files where the files need not to be transformed
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  mode: "production",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true
  }
}; */
