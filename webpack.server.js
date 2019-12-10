const path = require('path');
const webpackNodeExternal = require('webpack-node-externals');

module.exports = {
    // Inform webpack that we are building a bundle for nodeJS and not for the browser
    target: 'node',

    // Tell webpack the root file of the application
    entry: './src/index.js',

    // Tell webpack where to put the output file thta is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    //externals: [webpackNodeExternal()],

    // Tell webpack to run babel on every file ir runs through
    module: {
        rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: [
                'react',
                'stage-0',
                ['env', { targets: { browsers: ['last 2 versions'] } }]
              ]
            }
          }
        ]
      },
};