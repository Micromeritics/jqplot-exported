/* global __dirname, require, module*/

const webpack = require('webpack');
const glob = require("glob");

let libraryName = 'jqplot';

/**
 * Given a glob pattern returns the matched paths as an entry point object for Webpack.
 * @param  {String} globPattern A glob pattern to match tests.
 * @return {Object}             Key value pairs, keyed on filepath.
 */
function getEntryPoints(globPattern) {
  const testFiles = glob.sync(globPattern);
  const entryPoints = {};
  testFiles.forEach(function (file) {
    let name = file.replace(/\.js$/, '').replace(/\/?src\/plugins\//, '');
    if (name[0].toUpperCase() === name[0]) {
      // first letter of source file is uppercase? this is a plugin
      const camelCaseName = name[0].toLowerCase() + name.substring(1);
      name = `plugins/jqplot.${camelCaseName}`;
    }
    entryPoints[name] = './' + file;
  });
  return entryPoints;
}

const commonConfig = {
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /(\.jsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js'],
  },
  externals: {
    "jquery/jquery": {
      global: "jQuery",
      commonjs: "jquery/jquery",
      commonjs2: "jquery/jquery",
      amd: "jquery/jquery",
    },
  },
};


module.exports = [
  Object.assign({}, commonConfig, {
    entry: { "jqplot": __dirname + '/src/jqplot.js' },
  }),
  Object.assign({}, commonConfig, {
    entry: getEntryPoints('src/plugins/*.js'),
    externals: Object.assign({}, commonConfig.externals, {
      "../jqplot.core": {
        global: "jQuery.jqplot",
        commonjs: "jqplot",
        commonjs2: "jqplot",
        amd: "jqplot",
      },
    }),
  }),
];