const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "glove-wizard",
    projectName: "header-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modifique a configuração do webpack como desejar, adicionando a este objeto,
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  });
};
