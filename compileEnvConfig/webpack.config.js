const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // 指定入口文件
  entry: "./src/index.ts",
  // 打包文件输出目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // webpack打包时需要使用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader，执行顺序从后往前执行
        use: [
          //   {
          //     loader: "babel-loader",
          //     // 配置babel
          //     options: {
          //       // 设置与定义的环境
          //       presets: [
          //         [
          //           // 指定环境的插件
          //           "@babel/preset-env",
          //           // 配置信息
          //           {
          //             // 要兼容目标浏览器信息
          //             targets: {
          //               // 兼容性配置
          //               chrome: "88",
          //             },
          //             // 指定corejs的版本
          //             corejs: "3",
          //             // 使用corejs的方式"usage"表示按需加载
          //             useBuiltIns: "useage",
          //           },
          //         ],
          //       ],
          //     },
          //   },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      //   title: "自定义title",
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // 用来设置模块引用
  resolve: {
    // .ts .js结尾的文件可以作为模块引用
    extensions: [".ts", ".js"],
  },
};
