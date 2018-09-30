module.exports = {
    entry: ['./src/app.js'],
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '.',
        inline: true
    }
}