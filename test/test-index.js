const test = require('ava');
const thunderGirl = require("../index")

test('should copy source_arr to destination_arr', async t => {
  let destination_arr = []
  let source_arr = [1, 2, 3]

  await thunderGirl.load(destination_arr, source_arr, 1, 0);
  t.is(destination_arr.length, source_arr.length);
  t.is(destination_arr[0], source_arr[0]);
  t.is(destination_arr[1], source_arr[1]);
  t.is(destination_arr[2], source_arr[2]);
});

test('should copy source_arr to destination_arr by 2 split', async t => {
  let destination_arr = []
  let source_arr = [1, 2, 3]

  await thunderGirl.load(destination_arr, source_arr, 2, 0)
  t.is(destination_arr.length, source_arr.length);
  t.is(destination_arr[0], source_arr[0]);
  t.is(destination_arr[1], source_arr[1]);
  t.is(destination_arr[2], source_arr[2]);
});

test('should copy source_arr to destination_arr by 3 split', async t => {
  let destination_arr = []
  let source_arr = [1, 2, 3]

  await thunderGirl.load(destination_arr, source_arr, 3, 0)
  t.is(destination_arr.length, source_arr.length);
  t.is(destination_arr[0], source_arr[0]);
  t.is(destination_arr[1], source_arr[1]);
  t.is(destination_arr[2], source_arr[2]);
});

test('should copy source_arr to destination_arr case of 1000sec', async t => {
  let destination_arr = []
  let source_arr = [1, 2, 3]

  await thunderGirl.load(destination_arr, source_arr, 1, 1000)
  t.is(destination_arr.length, source_arr.length);
  t.is(destination_arr[0], source_arr[0]);
  t.is(destination_arr[1], source_arr[1]);
  t.is(destination_arr[2], source_arr[2]);
});
