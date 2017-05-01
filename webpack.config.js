const glob = require("glob");

const commonConfig = {
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'jqplot',
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
    "jquery": {
      global: "jQuery",
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "jquery",
    },
  },
};

function getPluginEntryPoints() {
  const testFiles = glob.sync('src/plugins/*.js');
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


module.exports = [
  Object.assign({}, commonConfig, {
    entry: { "jqplot": __dirname + '/src/jqplot.js' },
  }),
  Object.assign({}, commonConfig, {
    entry: getPluginEntryPoints(),
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