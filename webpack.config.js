const path = require('path');

module.exports = {
      mode: 'development',
      entry: './src/index.js',
      output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
      },
      externals: {
            $: 'jQuery',
            UIContainerType3: 'UIContainerType3',
            UI: 'UI',
      },
      watch: true
};