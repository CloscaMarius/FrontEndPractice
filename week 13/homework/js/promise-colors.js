

function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json'


const main = document.querySelector('main');
const list = document.querySelector('ul');
list.style.listStyleType = 'none';

get(requestURL).then(function(response) {
  return JSON.parse(response);
}).then(function(response) {
    const colors = response;

    for (var color in colors) {
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
});

