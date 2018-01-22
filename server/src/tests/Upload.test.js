import request from 'supertest';
import path from 'path';
import app from '../app';

describe('Upload Endpoint', () => {
  it('responds with 422 to empty upload request [POST]', (done) => {
    request(app)
      .post('/upload')
      .expect(422)
      .end(() => {
        done();
      });
  });

  it('responds with 422 to non image upload request [POST]', (done) => {
    request(app)
      .post('/upload')
      .attach('file', path.join(`${__dirname}/files/test.txt`))
      .expect(422)
      .end(() => {
        done();
      });
  });

  it('responds with 200 to image upload request [POST]', (done) => {
    request(app)
      .post('/upload')
      .attach('file', path.join(`${__dirname}/files/alan.jpg`))
      .expect(200)
      .end(() => {
        done();
      });
  });

  it('responds with 422 to a too large image upload request [POST]', (done) => {
    app.fileSize = 10;
    request(app)
      .post('/upload')
      .attach('file', path.join(`${__dirname}/files/alan.jpg`))
      .expect(422)
      .end(() => {
        done();
      });
  });
});
