//EX1
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.
const url = 'https://jsonplaceholder.typicode.com/posts';
const myPost = {
  title: 'Javascript Post is awesome',
  body: 'lorem ipsum etc',
  userId: 1
}

const options = {
  method: "POST",
  body: myPost ,
  headers: {"Content-Type": "application/json"},
};

fetch(url, options);

fetch(url).then(response=>response.json()).then(response=>console.log(response.title));
//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()
