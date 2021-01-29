const capitalizeWords = (words) => {
	const capitalizedPromise = new Promise((resolve, reject) => {
  	const capitalizedWords = words.map((word) => {
    	if(typeof word !== 'string') reject("Words array not consistent!");
      
      return `${word[0].toUpperCase()}${word.slice(1)}`; 
    });
    
    resolve(capitalizedWords);
  });
  
  return capitalizedPromise;
};

const capitalizedAndSortedWords = (words) => {
	const capitalizedWords = capitalizeWords(words); // initiating first promise
  
  const sortedPromise = new Promise((resolve, reject) => { // creating 2nd promise
  	capitalizedWords.then(capitalizedWords => { // calling first promise and getting result
  		const sortedWords = capitalizedWords.sort();
      
      resolve(sortedWords); // resolving 2nd promise
    });
    
    capitalizedWords.catch(response => reject(response)); // handling error for first promise and rejecting the 2nd one
  });
  
  return sortedPromise;
};

const sortedTest = capitalizedAndSortedWords(["jungle", "alphabet", "book"]);

/* sortedTest.then((response) => console.log(response));
 */
sortedCatchTest = capitalizedAndSortedWords([1, "smth", "smthElse"]);

sortedCatchTest.catch(response => console.log(response));