import makeRequest from "../../class/fetchModule.js";

//Obiectul de mai jos il puneti intr-un fisier separat "world.json"
//faceti fech intr-un fisier separat de index.js
//importati fetch-ul in index.js
// stocati tot raspunsul in localStorage - hint - stringify
// Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *

const constructWorld = (worlds) => {
  // construim domul cu elementele corespunzatoare

  worlds.forEach(w => {
    const author = document.createElement('p');
    const title = document.createElement('p');
    const newVideo = document.createElement('iframe');
    newVideo.setAttribute('width', "420");
    newVideo.setAttribute('height', "315");
    const rating = document.createElement('p');

    author.innerHTML = w.author;
    title.innerHTML = w.title;
    newVideo.src = w.youtubeVideo.replace("watch?v=", "embed/");

    function star() {
      let stars = '';

      for (var i = 0; i < w.rating; i++) {
        stars += '*';
      }
      return stars;
    }

    rating.innerHTML = star();

    document.body.appendChild(author);
    document.body.appendChild(title);
    document.body.appendChild(newVideo);
    document.body.appendChild(rating);
  })

};

const retrieveFromLocalStorage = localStorage.getItem("worlds");

if (retrieveFromLocalStorage) {
  // il folosim direct ca sa creem elementele
  constructWorld(JSON.parse(retrieveFromLocalStorage));
} else {
  makeRequest("../class/worlds.json").then((response) => {
    const localStorageValue = JSON.stringify(response);
    localStorage.setItem("worlds", localStorageValue);

    constructWorld(response);
  });
}