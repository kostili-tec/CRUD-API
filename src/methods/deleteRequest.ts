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
      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify({ message: `Delete user with id: ${id}` }));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: 'User not exist' }));
      res.end();
    }
  } else {
    res.statusCode = 400;
    res.write(JSON.stringify({ error: 'User id is invalid' }));
    res.end();
  }
};
