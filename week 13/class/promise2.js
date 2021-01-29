const verifyInput = (input) => {
    const promiseToReturn = new Promise((resolve, reject) => {
         setTimeout(function () {
            if (typeof input === 'string') {
                resolve(input.toUpperCase())
            } else {
                reject(input)
            }
         }, 500);

        
    });
    return promiseToReturn;
}

const aString = verifyInput('this is a string');

aString.then((response) => {
    console.log(response);
})

const aNumber = verifyInput(12345);

aNumber.catch((response)=>{
    console.log(response);
})