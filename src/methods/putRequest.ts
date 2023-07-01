import { ServerResponse } from 'http';
import { IRequest, IUserData } from '../types/interfaces.js';
import { users } from '../data/users.js';

export default (req: IRequest, res: ServerResponse) => {
  const baseUrl = req.url?.substring(0, req.url.lastIndexOf('/') + 1);
  const id = req.url?.split('/')[3];
  let data = '';

  if (baseUrl === '/api/users/' && id && !isNaN(parseInt(id))) {
    req.on('data', (chunk) => {
      data += chunk;
      console.log(data);
    });
    req.on('end', () => {
      try {
        const findUserIndex = users.findIndex((user) => user.id === id);
        if (findUserIndex > -1) {
          const newUser: IUserData = JSON.parse(data);
          users.splice(findUserIndex, 1, { id, ...newUser });
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify({ message: 'User updated' }));
          res.end();
        } else {
          res.statusCode = 404;
          res.write(JSON.stringify({ error: 'User not exist' }));
          res.end();
        }
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON data', message: error }));
      }
    });
  } else {
    res.statusCode = 400;
    res.write(JSON.stringify({ error: 'User id is invalid' }));
    res.end();
  }
};
