const assert = require('assert');
const proxyquire = require('proxyquire');

const testServer = require('../utils/testServer');

describe('routes - users', function() {
  const route = proxyquire('../routes/user', {});
  const request = testServer(route);
  describe('GET /', function() {
    it('should respond with status 200', function(done) {
      request.get('/').expect(200, done);
    });

    it('should respond with list of students', function(done) {
      request.get('/students').end((error, res) => {
        assert.deepEqual(res.body, {
          nombre: 'juanpis',
        });
      });

      done();
    });
  });
});
