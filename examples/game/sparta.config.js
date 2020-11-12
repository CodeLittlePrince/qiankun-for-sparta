const proxyServerConfig = require('./config/proxyServer')

module.exports = {
  favicon: 'favicon.ico',

  webpack: {
    publicPath: process.env.NODE_ENV === 'production' ? process.env.CDN : 'http://10.242.217.245:8080/'
  },

  devServer: {
    proxy: [{
      context: ['/api', '/mock-switch'],
      target: `http://localhost:${proxyServerConfig.port}`
    }],
    historyApiFallback: true
  }
}