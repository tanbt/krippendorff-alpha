module.exports = {
    entry: ['./demo/js/app.js'],
    output: {
        path: __dirname + "/demo",
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '.',
        inline: true
    }
}