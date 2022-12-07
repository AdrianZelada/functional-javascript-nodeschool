    function countWords(inputWords) {
      // SOLUTION GOES HERE
	return inputWords.reduce((res, obj) =>{
		return {
			...res,
			[obj]: res[obj] ? res[obj]+1: 1 
		}
	},{});
    }

    module.exports = countWords
