const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/Grid.jsx"),
    output: {
        library: '@luisgilgb/react-grid',
        libraryTarget: 'umd',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    optimization:{
        minimize: false
    }
};