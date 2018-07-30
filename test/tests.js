var assert = require('assert');

const range = (max) => Array.from({length: max}, (value, key) => key)
coll = range(1000)

describe('Feature: Server can respond to requests', () => {
    describe('User gotos base url and receives server greeting', () => {
        coll.forEach((i) => {
            it('Server should say Hello!', () => {
                assert.equal(i, true);
            });
        });
    });
});
