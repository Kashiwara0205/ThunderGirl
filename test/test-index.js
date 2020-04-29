const test = require('ava');
const thunderGirl = require("../index")

test('should get hello', t => {
  t.is('hello', thunderGirl.hello());
});