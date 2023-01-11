const request = require('supertest');
const app = require('./server'); // import the express app

describe('GET /search', () => {
    it('responds with json', (done) => {
        request(app)
            .get('/search')
            .query({ term: 'test', media: 'all' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
