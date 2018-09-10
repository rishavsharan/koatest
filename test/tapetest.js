const test = require('tape');
const appveyor = require('tap-appveyor');
const helpers = require('./helpers.js')

const pass_percentage = (p) => Math.random() > (1- p/100)
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const num = 100
const passrate = 80

// test.createStream().pipe(appveyor());

test('My fancy test harness ',  (t) => {
    t.plan(num);


    asyncForEach([...Array(num).keys()], async (i) => {
        await sleep(100)
        t.ok(pass_percentage(passrate), 'inside delayed');
    })
})

