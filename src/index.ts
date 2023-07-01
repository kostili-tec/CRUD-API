import http from 'http';
import 'dotenv/config';

import getRequest from './methods/getRequest.js';
import postRequest from './methods/postRequest.js';
import putRequest from './methods/putRequest.js';
import deleteRequest from './methods/deleteRequest.js';
import { IRequest } from './types/interfaces';
import { users } from './data/users.js';

const PORT = process.env.PORT || 5001;

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    const myRequest: IRequest = Object.assign(req, { users: users });
    console.log(myRequest.url);
    if (myRequest.url === '/error') throw new Error('error');
    switch (myRequest.method) {
      case 'GET':
        getRequest(myRequest, res);
        break;
      case 'POST':
        postRequest(myRequest, res);
        break;
      case 'PUT':
        putRequest(myRequest, res);
        break;
      case 'DELETE':
        deleteRequest(myRequest, res);
        break;
      default:
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ title: 'Not found', message: 'Route not found' }));
        res.end();
    }
  } catch (error) {
    console.error('Server side error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Server side error' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
