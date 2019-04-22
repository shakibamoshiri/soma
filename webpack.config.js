const path = require( 'path' );

const config = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};

const es5 = Object.assign({}, config, {
    name: "soma.es5",
    mode: "production",
    entry: __dirname +  "/src/js/index.es5.js",
    output: {
       path: __dirname + "/build/js/",
       filename: "soma.es5.js"
    },
});

const es6 = Object.assign({}, config,{
    name: "soma",
    mode: "production",
    entry:  __dirname + "/src/js/index.es6.js",
    output: {
       path: __dirname + "/build/js/",
       filename: "soma.js",
       libraryTarget: 'commonjs2'
    },
});

// Return Array of Configurations
module.exports = [
    es5,
    es6
];
