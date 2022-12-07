var slice = Array.prototype.slice

function logger(namespace) {
  return function(){    
    console.log(`${namespace}`, ...slice.call(arguments, 0, arguments.length));
  }
  // SOLUTION GOES HERE
}

module.exports = logger