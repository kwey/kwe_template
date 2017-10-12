const webpack = require('webpack');
const config = require('./builds/webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Config = require('./builds/source.base');

const env = process.env.NODE_ENV;
console.log('Webpack run env:' + env)

const outPath = Config.outputPath;

if (env === 'release') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    },
    sourceMap: true,
    beautify: true
  }));
  config.plugins.push(new CleanWebpackPlugin([outPath],　 //匹配删除的文件
    {
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
    })
  )
} else {
  config.devtool = 'cheap-eval-source-map';
  config.watch = true;
}





module.exports = config