//Selectati fiecare element cu metodele ajutatoare

// primul dupa id - getElementById
document.getElementById('test').style.backgroundColor = 'orange'

//al doilea si al 3lea cu getElementsByClassName
var testClasses = document.getElementsByClassName('test');
for(i=0;i<testClasses.length;i++){testClasses[i].style.backgroundColor = 'red'}

//cele 2 section cu getElementByTagName
var sectionTag = document.getElementsByTagName('section');
for (i=0;i<sectionTag.length;i++){sectionTag[i].style.backgroundColor = 'grey'}

//etc
document.querySelector('#test-query').style.backgroundColor = 'blue'

var testQueryAll = document.querySelectorAll('.test-query-all');
for(i=0;i<testQueryAll.length;i++){testQueryAll[i].style.backgroundColor = 'green'}

// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda