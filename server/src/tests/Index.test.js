import request from 'supertest';
import app from '../app';

describe('Index Endpoint', () => {
  it('responds to /index [GET]', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('responds with 404 to non existing endpoint [GET]', (done) => {
    request(app).get('/error').then((response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
