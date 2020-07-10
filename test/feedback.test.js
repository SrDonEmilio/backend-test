const chai = require('chai');
const chaiHttp = require('chai-http');
const request =  require('supertest')

const app = require('../app');

chai.should();
chai.use(chaiHttp);

describe('GET /api/feedback', () => {
  it('Get last 20 feedback', (done) => {
    request(app).get('/api/user').expect(200, done);
  });

  it('Fail in request url', (done) => {
    request(app)
      .get('/api/users')
      .expect(404, done)
      .end((err, res) => {
        if (err) return done(err);
        console.log('res=>', res.body);
        done();
      });
  });
});
