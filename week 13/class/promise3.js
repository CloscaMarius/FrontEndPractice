


const words = (array) => {
    const promiseToReturn = new Promise((resolve, reject) => {
        resolve(array);
    });
    return promiseToReturn;
}

const capitalizeWords = (input) => {
    return input.map((x) => x[0].toUpperCase() + x.slice(1));
}

const sortWords = (input) => {
    return input.sort();
}

const newArray = words(['aaaa', 'xxxx', 'ffff']);

newArray
    .then((response) => {
        console.log(capitalizeWords(response));
        return capitalizeWords(response);
    }).then((result)=>{
        console.log(sortWords(result));
    });

    

