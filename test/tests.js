var assert = require('assert');

const range = (max) => Array.from({length: max}, (value, key) => key)
const pass_percentage = (p) => Math.random() > (1- p/100)

const coll = range(100000)
const pass = 80

describe('Feature: Server can respond to requests', () => {
    describe('User gotos base url and receives server greeting', () => {
        coll.forEach((i) => {
            it(`test case ${i}`, () => {
                assert.ok(pass_percentage(pass));
            });
        });
    });
});
