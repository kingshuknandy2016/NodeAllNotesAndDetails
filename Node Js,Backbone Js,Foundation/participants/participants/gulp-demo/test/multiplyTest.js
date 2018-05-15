var assert = require('assert');
var multiply = require('../src/multiply');

describe('Calculator Tests', function() {
    it('returns 2*3=6', function(done) {
        assert.equal(multiply(2, 3), 6);
        done();
    });
});

