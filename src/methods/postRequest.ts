import { ServerResponse } from 'http';
import { users } from '../data/users.js';
import { getMaxId } from '../utils/getMaxId.js';
import { checkFields } from '../utils/checkRequestFileds.js';
import { IRequest, IUserData } from '../types/interfaces.js';

export default (req: IRequest, res: ServerResponse) => {
  let data = '';
  if (req.url === '/api/users') {
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        const newUser: IUserData = JSON.parse(data);
        if (checkFields(newUser)) {
          const newId = getMaxId(users);
          newUser.id = newId;
          users.push(newUser);
          console.log(newUser);
          res.statusCode = 201;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'User added successfully' }));
        } else {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid JSON data' }));
        }
      } catch (error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
};
