

const main = document.querySelector('main');
const list = document.querySelector('ul');
list.style.listStyleType = 'none';

let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const colors = request.response;
    showColors(colors);
}

function showColors(obj) {
    const colors = obj;

    for (color in colors) {
        let newLine = document.createElement('li');
        let newSquare = document.createElement('div');

        newSquare.style.width = '10px';
        newSquare.style.height = '10px';
        newSquare.style.backgroundColor = colors[color];
        newSquare.style.alignSelf = 'center';

        list.appendChild(newLine);
        
        newLine.textContent = color +' : ';
        newLine.appendChild(newSquare);
        newLine.style.display = 'flex';
        list.style.display = 'flex';
        list.style.flexDirection = 'column';
        list.style.alignItems = 'center';
    }
}
