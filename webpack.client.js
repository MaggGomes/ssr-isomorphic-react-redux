const path = require('path');

module.exports = {
    // Tell webpack the root file of the application
    entry: './src/client/index.js',

    // Tell webpack where to put the output file thta is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell webpack ro run babel on every file ir runs through
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
      }
};