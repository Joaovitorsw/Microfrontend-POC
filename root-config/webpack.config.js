const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "glove-wizard";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });
  return merge(defaultConfig, {
    devServer: {
      port: 9000,
      hot: "only",
      static: {
        directory: path.join(__dirname, "../"),
        serveIndex: true,
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv ?? webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
