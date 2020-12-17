const books = [
    {
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        read: true,
        cover: '../resources/the-power-of-habit.jpg'
    },
    {
        title: 'Mindset: The New Psychology of Success',
        author: 'Carol S. Dweck',
        read: false,
        cover: '../resources/Mindset-The-New-Psychology-of-Success.jpg'
    }];

// Creati o pagina web care are un h1 cu "Book List"
// adugati un script style unde sa tinem js-ul
//Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
//BONUS: folositi ul si li pentru a face display la carti
//BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul si pe obiectul cartii - acolo va fi si poza)
//BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.

// new header
const bodyTag = document.querySelector('body');
const newHeader = document.createElement('h1');
bodyTag.appendChild(newHeader);
newHeader.innerHTML = 'Book List';

//new paragraph
for (i = 0; i < books.length; i++) {
    const newParagraph = document.createElement('p');
    bodyTag.appendChild(newParagraph);
    newParagraph.innerHTML = books[i].title + ' by ' + books[i].author;
}

//new unordered list
const newUl = document.createElement('ul');
bodyTag.appendChild(newUl);
const ulTag = document.querySelector('ul');

// new list, img and style
for (i = 0; i < books.length; i++) {
    const newLi = document.createElement('li');
    const newImg = document.createElement('img')
    ulTag.appendChild(newLi);
    newLi.innerHTML = books[i].title + ' by ' + books[i].author;
    newLi.appendChild(newImg);
    newImg.setAttribute('src',books[i].cover);
    if(books[i].read){
        newLi.setAttribute('style','color: green; display: grid;');
    }else{
        newLi.setAttribute('style','color: red; display: grid;');
    }
    newLi.appendChild(document.createElement('br'));
    
}


