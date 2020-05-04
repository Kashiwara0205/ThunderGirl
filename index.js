function check_args(split, msec){
  if(isNaN(split)){
    const msg = "invalid split" 
    throw msg  
  }

  if(isNaN(msec)){
    const msg = "invalid msec" 
    throw msg  
  }

  if (split < 1){
    const msg = "invalid split number size" 
    throw msg
  }
}

function sleep(sec) {
  return new Promise(function (resolve) {
    setTimeout(function() { resolve() }, sec);
  });
}

function rest_array(destination_arr){
  destination_arr.splice(0, destination_arr.length)
}

// if call acc_load in load method then npm test failed
// so, Not calling acc_load
// perhaps The cause is async
const load = async function(destination_arr, source_arr, split, msec){
  rest_array(destination_arr)
  let index = 0;
  while(index < source_arr.length){
    let splited_arr = source_arr.slice(index, index + split)
    index += split
    // vue don't detect concat method
    // so, instead of concat use push 
    for(let i = 0; i < splited_arr.length; i++){ destination_arr.push(splited_arr[i]) }
    await sleep(msec)
  }
}

const acc_load = async function(destination_arr, source_arr, split, msec){
  check_args(split, msec)
  let index = 0;
  while(index < source_arr.length){
    let splited_arr = source_arr.slice(index, index + split)
    index += split
    // vue don't detect concat method
    // so, instead of concat use push 
    for(let i = 0; i < splited_arr.length; i++){ destination_arr.push(splited_arr[i]) }
    await sleep(msec)
  }
}

module.exports = { 
  load: load,
  acc_load: acc_load
}