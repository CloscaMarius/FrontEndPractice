const compareNumberWithTen = (numberToCheck) => {
	const promiseToReturn = new Promise((resolve, reject) => {
  	if(numberToCheck < 10) {
    	reject("Your number is smaller than 10.");
    } else {
    	resolve("Your number is bigger than 10.");
    }
  });
  
  return promiseToReturn;
};

const promiseFor11 = compareNumberWithTen(11);

/* promiseFor11.then((response) => {
  console.log(response);
}); */

const promiseFor2 = compareNumberWithTen(2);

promiseFor2.catch((response) => {
  console.log(response);
}); 