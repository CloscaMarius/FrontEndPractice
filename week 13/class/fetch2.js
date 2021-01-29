// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author

import  makeRequest from "./fetchModule.js";

const url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

makeRequest(url)
.then((response)=>{
    const books = response.items;
    const filteredBooks = books.filter(element =>{
        return element.volumeInfo.pageCount > 230
    })
       
    console.log(filteredBooks)
    });



