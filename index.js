function sleep(sec) {
  return new Promise(function (resolve) {
      setTimeout(function() { resolve() }, sec);
  });
}

const load = async function(destination_arr, source_arr, split, sec){
  let index = 0;
  while(index < source_arr.length){
    await sleep(sec)
    let splited_arr = source_arr.slice(index, index + split)
    index += split
    Array.prototype.push.apply(destination_arr,splited_arr);
  }
}

module.exports = {
  load: load,
}