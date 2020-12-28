/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://localhost:3335/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/ws/': {
      target: 'ws://localhost:3335/',
      ws: true,
      changeOrigin: true,
    },
    // '/api/user/':{
    //   target:"http://172.38.0.266:8881/",
    //   ws:true
    // },
    '/file/': {
      target: 'http://localhost:3334/',
      changeOrigin: true,
    },
  },
};
