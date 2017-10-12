const webpack = require('webpack');
const Config = require('./source.base');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry:  Config.entry,
  output: {
    path: Config.outputPath,//打包后的文件存放的地方
    filename: Config.outputFileName,//打包后输出文件的文件名
    library: Config.outputLibrary,         // 项目对外命名
    libraryTarget: Config.outputLibraryTarget     // 打包对外模式, 默认 var, 可选umd、amd等
  },
  module: {
    rules: [
        {
            test: /(\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/
        },{
          test: /\.less$/,
          use: [
              {
                  loader: "style-loader"
              }, {
                  loader: "css-loader",
                  // options: {
                  //   modules: true
                  // }
              }, {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer(
                    { browsers: ['iOS >= 7', 'Android >= 4.1', 
                       'last 10 Chrome versions', 'last 10 Firefox versions', 
                       'Safari >= 6', 'ie > 8'] 
                    }
                  )],
                },
              }, {
                loader: "less-loader"
              },
              
          ]
        },
        {
          test: /.(png|svg|jpe?g|gif)$/,
          use: [
              'url-loader?limit=102400&name=images/[name].[ext]'
          ]
        }, {
            test: /\.(eot|svg|ttf|woff)/i,
            use: 'url-loader?limit=102400'
        }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) // default value if not specified
      }
    }),
    
  ]
    
}