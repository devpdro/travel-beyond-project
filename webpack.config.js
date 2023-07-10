const path = require("path");

module.exports = {
  entry: "./src/index.js", // Arquivo principal do seu projeto
  output: {
    path: path.resolve(__dirname, "dist"), // Diretório de saída
    filename: "bundle.js", // Nome do arquivo de saída
  },
  module: {
    rules: [
      // Regra para arquivos SCSS
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
