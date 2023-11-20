const scriptExtension = /\.(tsx|ts|js|jsx|mjs)$/;
const imgExtension = /\.(bmp|gif|jpg|jpeg|png|webp)$/;
const fontExtension = /\.(eot|otf|ttf|woff|woff2)$/;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: scriptExtension,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: fontExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imgExtension,
        type: 'asset/resource',
      },
    ],
  },
};
