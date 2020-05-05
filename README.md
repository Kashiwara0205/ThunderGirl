# thunderGirl
[![Build Status](https://travis-ci.org/Kashiwara0205/thunderGirl.svg?branch=master)](https://travis-ci.org/Kashiwara0205/thunderGirl)
[![npm version](https://badge.fury.io/js/thunder-girl.svg)](https://badge.fury.io/js/thunder-girl)

npm library for vue lazy drawing

## Getting started

```
npm i thunder-girl
```

## Usage
Reads an array every specified number of milliseconds

```
thunderGirl.load(destination_arr, source_arr, slice, msec)
```
accumulate load
```
thunderGirl.acc_load(destination_arr, source_arr, slice, msec)
```

## args
|Name|description|
|:---|:---|
|destination_arr|destination array. array type|
|source_arr|source array. array type|
|slice|number of arrays to divide. integer type|
|msec|sleep msec. integer type|

## vue example code

```
methods:{
  load: async function(){
    await thunderGirl.load(this.disp, this.table_data, parseInt(5), parseInt(50))
    console.log("complete reload")
  },

  acc_load: async function(){
    await thunderGirl.acc_load(this.disp, this.table_data, parseInt(5), parseInt(50))
    console.log("complete acc_load")
  }
},
```

## License
The libray is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).