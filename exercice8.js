function duckCount() {
  if(arguments.length == 0) {
    return 0;
  } else {
    const f = arguments[0];
    return (Object.prototype.hasOwnProperty.call(f, 'quack') ? 1 : 0) +  duckCount(...Array.prototype.splice.call(arguments, 1, arguments.length))
  }   
  // SOLUTION GOES HERE
}

module.exports = duckCount
