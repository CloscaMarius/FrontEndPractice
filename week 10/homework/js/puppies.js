// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'

const request = new XMLHttpRequest();
request.open('GET', puppies);
request.responseType = 'json';
request.send();

request.onload = () => {
    const reddit = request.response;
    showData(reddit);
}

const showData = (obj) => {
    const reddit = obj;

    let btn = document.querySelector('.btn');
    let text = document.querySelector('.text');

    btn.addEventListener('click', () => {
        text.innerHTML = "";

        for (i = 0; i < reddit.data.children.length; i++) {
            let newImg = document.createElement('img');
            newImg.setAttribute('src', "" + reddit.data.children[i].data.thumbnail + "");
            text.appendChild(newImg);
        }
    })

}