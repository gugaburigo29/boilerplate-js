const path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js'),
        path.resolve(__dirname, 'src/IdGenerator.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    watch: true,
    mode: "development"
}
