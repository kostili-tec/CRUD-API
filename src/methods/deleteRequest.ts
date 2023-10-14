import { ServerResponse } from 'http';
import { IRequest } from '../types/interfaces.js';
import { users } from '../data/users.js';

export default (req: IRequest, res: ServerResponse) => {
  const id = req.url?.split('/')[3];
  const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
  if (baseUrl === '/api/users/' && id && !isNaN(parseInt(id))) {
    const findUser = users.findIndex((user) => user.id === id);
    if (findUser > -1) {
      users.splice(findUser, 1);
      res.statusCode = 204;
      res.end();
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ error: 'User not exist' }));
      res.end();
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ error: 'User id is invalid' }));
    res.end();
  }
};
