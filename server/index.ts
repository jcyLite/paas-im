import api from './api';
import ws from './ws';
const bodyParser = require('body-parser');
export default function mockws(wss: any, app: any) {
  return {
    ws: ws(wss),
    api,
  };
}
