const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: "./main.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        noParse: ['./require.js']
    }
};