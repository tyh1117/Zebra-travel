
module.exports = {
  publicPath: './', //执行npm run build打包命令的时候，调整资源的引用路径
  devServer: {
    proxy: {
        '/api': {     //这里最好有一个 /
            target: 'https://m.bmtrip.com',  // 后台接口域名
            changeOrigin: true,  //是否跨域
        }
    }
  }
}

