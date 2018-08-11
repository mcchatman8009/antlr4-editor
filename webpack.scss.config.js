const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: {
        'codemirror-editor': './src/scss/codemirror/editor.js',
        'codemirror-icons': './src/scss/codemirror/icons.js',
        'codemirror-all-themes': './src/scss/codemirror/themes.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                {loader: "css-loader", options: {minimize: false}}, // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    }
};
