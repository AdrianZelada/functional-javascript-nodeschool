
function Spy(target, method) {
  // SOLUTION GOES HERE
  const fn = target[method];
  this.count = 0;
  target[method] = ()=>{
    this.count++;
    fn(...arguments)
  }
  return this
}

module.exports = Spy
