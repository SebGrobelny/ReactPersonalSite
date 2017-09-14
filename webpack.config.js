const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'static'),
  entry: [
    './main.js',
    
  ],
  output: {
    path: path.join(__dirname, 'templates'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

