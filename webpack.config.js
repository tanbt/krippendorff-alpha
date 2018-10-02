module.exports = {
    entry: ['./demo/js/app.js'],
    output: {
        path: __dirname + "/demo",
        filename: 'bundle.js'
    },
    devtool: "source-map",
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '.',
        inline: true
    }
}