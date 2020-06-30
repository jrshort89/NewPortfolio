const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/scripts.js',
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'assets', 'scripts')
    },
    devtool: 'cheap-source-map',
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};