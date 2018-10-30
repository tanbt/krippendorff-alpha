module.exports = {
    entry: {
        "/demo/app": "./demo/js/app.js",
        "/dist/krippendorff": "./src/krippendorff.js",
        "/dist/krippendorff.es5": "./src/krippendorff.es5.js"
    },
    output: {
        path: __dirname,
        filename: "[name].min.js"
    },
    devtool: "source-map",
    mode: 'development',
    devServer: {
        port: 3000,
        contentBase: '.',
        inline: true
    }
}