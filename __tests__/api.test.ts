import request from 'supertest';
import server from '../src/server';

describe('api', () => {
  it('should return 200 and empty array', () => {
    request(server).get('/api/users').expect(200);
  });
});
