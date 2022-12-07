 module.exports = function (namespace) {
  // SOLUTION GOES HERE
  return function(){         
    const log = console.log.bind();
    log(namespace, ...arguments)
  }
}
