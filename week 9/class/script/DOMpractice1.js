// Adaugati un tag script la final
const bodyTag = document.querySelector('body');
const newScript = document.createElement('script');
bodyTag.appendChild(newScript);

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
bodyTag.style.fontFamily = "Arial, sans-serif";

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
document.getElementById('name').innerHTML = 'Marius'
document.getElementById('fav-drink').innerHTML = 'Lipton'
document.getElementById('born-place').innerHTML = 'Braila'

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
const listTags = document.querySelectorAll('li');
for(i=0;i<listTags.length;i++){
    listTags[i].setAttribute('class','listitem');
}
const headTag = document.querySelector('head');
const newStyle = document.createElement('style');
headTag.appendChild(newStyle);
newStyle.innerHTML = '.listitem{color: red;}'

// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

const newImg = document.createElement('img');
bodyTag.appendChild(newImg);
newImg.setAttribute('src','https://gblobscdn.gitbook.com/spaces%2F-LdbqCujxzeJqeQqlbM2%2Favatar.png?alt=media')