function checkUsersValid(goodUsers) {
   return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
	return submittedUsers.filter((item) =>{
		let sw = false;
		goodUsers.forEach((obj) =>{
			sw = sw || obj.id == item.id
		});
		return !sw;
	}).length == 0
   };
}

module.exports = checkUsersValid
