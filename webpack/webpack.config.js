var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist/js'),
        filename:'[name]-[chunkhash].bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            // filename:'index-[hash].html',
            filename:'index.html',
            template:'index.html',
            // 插入位置
            inject:'head',
            title:'webpack is good'
        })
    ]
}