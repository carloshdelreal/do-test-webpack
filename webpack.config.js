const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        test: /\.tsx?$/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    sourceMapFilename: 'index.js.map',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/shim.mjs', to: 'shim.mjs' }],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  target: 'web',
};
