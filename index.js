function check_args(split, m_sec){
  if(isNaN(split)){
    const msg = "invalid split" 
    throw msg  
  }

  if(isNaN(m_sec)){
    const msg = "invalid m_sec" 
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

const load = async function(destination_arr, source_arr, split, m_sec){
  rest_array(destination_arr)
  acc_load(destination_arr, source_arr, split, m_sec)
}

const acc_load = async function(destination_arr, source_arr, split, m_sec){
  check_args(split, m_sec)
  let index = 0;
  while(index < source_arr.length){
    let splited_arr = source_arr.slice(index, index + split)
    index += split
    // vue don't detect concat method
    // so, instead of concat use push 
    for(let i = 0; i < splited_arr.length; i++){ destination_arr.push(splited_arr[i]) }
    await sleep(m_sec)
  }
}

module.exports = { 
  load: load,
  acc_load: acc_load
}