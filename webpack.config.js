const path = require("path");

module.exports = {
  mode: "development",
  // 진입점
  entry: "./src/app.ts",
  output: {
    // 번들된 파일 이름
    filename: "bundle.js",
    // 파일이 저장될 위치
    // path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    // dist 폴더 clean
    clean: true,
  },
  devtool: "source-map",
  // 모듈 처리 방식
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        // node_modules 빼고 검색
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    // 제공되는 모든 항목에 gzip 압축 사용여부
    compress: true,
    port: 8080,
  },
};
