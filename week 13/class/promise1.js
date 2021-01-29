const verifyString = (string) => {
    const promiseToReturn = new Promise((resolve, reject) => {
        if (string.match('promise')) {
            resolve("success");
        } else {
            reject("error");
        }
    });

    return promiseToReturn;
};

const stringOne = verifyString('promise');

stringOne.then((response)=>{
    console.log(response);
})


const stringTwo = verifyString('null');

stringTwo.catch((response) => {
    console.log(response);
}); 