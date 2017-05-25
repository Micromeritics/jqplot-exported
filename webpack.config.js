const glob = require('glob');
const path = require('path');

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
    'jquery': {
      global: 'jQuery',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
    },
  },
};

function getPluginEntryPoints() {
  const testFiles = glob.sync('src/plugins/*.js');
  const entryPoints = {};
  testFiles.forEach(function (file) {
    let name = file.replace(/\.js$/, '').replace(/\/?src\//, '');
    entryPoints[name] = `./${file}`;
  });
  return entryPoints;
}


module.exports = [
  Object.assign({}, commonConfig, {
    entry: { 'jqplot': path.join(__dirname, '/src/jqplot.js') },
  }),
  Object.assign({}, commonConfig, {
    entry: getPluginEntryPoints(),
    externals: Object.assign({}, commonConfig.externals, {
      '../jqplot.core': {
        global: 'jQuery.jqplot',
        commonjs: 'jqplot',
        commonjs2: 'jqplot',
        amd: 'jqplot',
      },
    }),
  }),
];
