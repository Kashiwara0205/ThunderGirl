function check_args(split){
  // check split
  if (split < 1){
    const msg = "invalid split number" 
    throw msg
  }
}

function sleep(sec) {
  return new Promise(function (resolve) {
    setTimeout(function() { resolve() }, sec);
  });
}

const load = async function(destination_arr, source_arr, split, m_sec){
  check_args(split)
  
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

module.exports = { load: load }