const path = require('path');

module.exports = {
    configureWebpack: {
        // resolve: {
        //     alias: {
        //         '@/': path.resolve(__dirname, 'client/src/')
        //     }
        // },
        module: {
            rules: [
                {
                    test: /\.csv$/,
                    loader: 'csv-loader',
                    options: {
                        dynamicTyping: true,
                        header: true,
                        skipEmptyLines: true
                    }
                }
            ]
        },
    },
    devServer: { 
        open: true 
    }
}