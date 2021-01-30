//Ex2. 
//Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele

const localStorageOne = localStorage.setItem('width', '100px');
const localStorageTwo = localStorage.setItem('height', '100px');
const localStorageThree = localStorage.setItem('background-color', 'green');

const div = document.querySelector('#square');
div.style.width = localStorage.getItem('width');
div.style.height = localStorage.getItem('height');
div.style.backgroundColor = localStorage.getItem('background-color');

document.body.appendChild(div);