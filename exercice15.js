
function loadUsers(userIds, load, done) {
  var users = []    
  let count = 0;
  let rec = (id) =>{
    load(id, (result) =>{
      count++;
      users[id] = result;
      if(count === userIds.length) {
        return done(users)
      } else {
        rec(id++);
      }
    })
  }
  
  rec(0);
}

module.exports = loadUsers