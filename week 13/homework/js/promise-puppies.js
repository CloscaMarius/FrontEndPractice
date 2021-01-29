

import get from "./promiseModule.js";


let requestURL = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';




get(requestURL).then(function(response) {
  return JSON.parse(response);
}).then(function(response) {
  //console.log(response);
   showData(response);
});

const showData = (obj) => {
  const reddit = obj;

  let btn = document.querySelector('.btn');
  let text = document.querySelector('.text');

  btn.addEventListener('click', () => {
      text.innerHTML = "";

      for (var i = 0; i < reddit.data.children.length; i++) {
          let newImg = document.createElement('img');
          newImg.setAttribute('src', "" + reddit.data.children[i].data.thumbnail + "");
          text.appendChild(newImg);
      }
  })

}