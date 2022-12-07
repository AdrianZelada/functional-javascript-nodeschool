module.exports = function arrayMap(arr, fn) {
  // SOLUTION GOES HERE
  return arr.reduce((result, item) =>{
    result.push(fn(item))
    return result
  }, []) 
}
