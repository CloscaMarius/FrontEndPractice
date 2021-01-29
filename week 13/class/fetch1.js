// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json

import  makeRequest from "./fetchModule.js";

/* const makeRequest = (url) => {
  return fetch(url).then((response) => response.json());
}; */

makeRequest("https://jsonplaceholder.typicode.com/users").then((response) => {
  const mappedResult = response.map((item) => {
    const {
      username,
      name,
      address: { city },
    } = item;

    return { username, name, city };
  });

  console.log(mappedResult);
});



