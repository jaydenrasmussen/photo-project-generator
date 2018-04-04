const test = require('ava');
const createDirs = require('../app/createDirs');

test('createDirs is a function', t => {
    t.is(typeof createDirs, 'function');
});
