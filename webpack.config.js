module.exports = {
    entry: ['./js/app.js'],
    output: {
        path: __dirname + "/bundle",
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '.',
        inline: true
    }
}