module.exports = {
    configureWebpack: {
        // other webpack options to merge in ...
    },
    // devServer Options don't belong into `configureWebpack`
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        public: 'www.chesiver.top:8080',
    },
}