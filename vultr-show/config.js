module.exports = {
    configureWebpack: {
        // other webpack options to merge in ...
    },
    // devServer Options don't belong into `configureWebpack`
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        public: 'http://192.168.1.1:8080',
    },
}