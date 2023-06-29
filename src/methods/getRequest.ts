import { ServerResponse } from 'http';
import { IRequest } from '../types/interfaces.js';

export default (req: IRequest, res: ServerResponse) => {
  const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
  const id = req.url?.split('/')[3];
  if (req.url === '/api/users') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(req.users));
    res.end();
  } else if (baseUrl === '/api/users/' && id && !isNaN(parseInt(id))) {
    const findUserById = req.users.find((el) => el.id === id);
    if (findUserById) {
      res.statusCode = 200;
      res.write(JSON.stringify(findUserById));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: 'User not exist' }));
      res.end();
    }
  } else if (!id) {
    res.statusCode = 404;
    res.write(JSON.stringify({ error: 'Id is empty' }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'error' }));
  }
};
