import http from 'http';
import 'dotenv/config';

import getRequest from './methods/getRequest.js';
import postRequest from './methods/postRequest.js';
import deleteRequest from './methods/deleteRequest.js';
import { IRequest } from './types/interfaces';
import { users } from './data/users.js';

const PORT = process.env.PORT || 5001;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  const myRequest: IRequest = Object.assign(req, { users: users });
  console.log(myRequest.url);
  switch (myRequest.method) {
    case 'GET':
      getRequest(myRequest, res);
      break;
    case 'POST':
      postRequest(myRequest, res);
      break;
    /* case 'PUT':
        putReq(req, res);
        break; */
    case 'DELETE':
      deleteRequest(myRequest, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify({ title: 'Not found', message: 'Route not found' }));
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
