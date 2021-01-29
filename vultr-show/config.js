module.exports = {
    configureWebpack: {
        // other webpack options to merge in ...
    },
    // devServer Options don't belong into `configureWebpack`
    devServer: {
        host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        public: 'http://45.63.91.38:8080',
    },
}