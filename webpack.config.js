const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            }
        ]
    },
    baseUrl: './src',
    resolve: {
        alias: {
            assets: path.join(__dirname, 'src/assets'),
        },
    },
    externals: ['react'],
};
