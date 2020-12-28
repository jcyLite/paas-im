import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy.config';
export default defineConfig({
  dva: {
    immer: true,
    hmr: true,
  },
  extraBabelPlugins: [
    [
      'react-directives',
      {
        prefix: 'r',
        pragmaType: 'React',
      },
    ],
  ],
  proxy: proxy['dev'],
  nodeModulesTransform: {
    type: 'none',
  },
  server: {
    port: 3335,
    watch: ['./server/api', './server/database', './server/ws'],
  },
  routes: routes,
});
process.on('uncaughtException', function(e) {
  console.log(e);
});
