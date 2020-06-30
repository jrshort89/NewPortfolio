const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    }
};