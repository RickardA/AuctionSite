module.exports = {
  outputDir: './../src/main/resources/static',
  devServer: {
    proxy: {
      '/login': {
          target: 'http://localhost:8080/',
          ws: true,
          changeOrigin: true
      },
      '/logout': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
    },
    '/api': {
      target: 'http://localhost:8080/',
      ws: true,
      changeOrigin: true
  },
  '/assets': {
    target: 'http://localhost:8080/',
    ws: true,
    changeOrigin: true
}
  }
  }
}