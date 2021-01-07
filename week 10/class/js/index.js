/*
1. Modificati elementul de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/

const line = document.querySelector('p');
const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

const cameleonEventHandler = () => {
    line.style.color = randomColor;
}
// line.addEventListener('click', cameleonEventHandler);
line.onclick = cameleonEventHandler;
/*
2. Avand formularul dat, adaugati un event listener pentru buton care apeleaza o
functie postTheGossip cand este apasat
In aceasta functie luati toate valorile fieldurilor si faceti un story din ele
ex "Xulescu este innebunit dupa bere neagra"
*/

const postTheGossip = () => {
    const nameField = document.getElementById("name").value;
    const adjective = document.getElementById("adjective").value;
    const adverb = document.getElementById("adverb").value;
    const random = document.getElementById("random-word").value;
    const story = document.getElementById("story");

    story.innerHTML = nameField + " " + adjective + " " + adverb + " " + random;
}
const btn = document.getElementById("exButton");
btn.addEventListener('click', postTheGossip);


/*
2' * Cerinta de mai sus, fara button, in real time si cu event delegation
Hint: eventListenerul de keydown trebui pus pe <ul>
*/

const uList = document.querySelector('ul');

uList.addEventListener('keydown', postTheGossip);
/*
3. Creati urmatoarele functii sqrNum, halfNum, percentNum si areaCircle.
Pentru fiecare button aveti de adaugat un event listener pe click.
sa gaseasca valoarea inputului si sa afiseze rezultatul solutiei
Bonus: faceti sa functioneze la parasirea inputului in loc de click
*/

const result = document.getElementById('sol')

const sqrNum = () => {
    const square = document.getElementById("square").value;
    result.innerHTML = square * square;
}
const sqrBtn = document.getElementById('sqr-btn');
sqrBtn.addEventListener('click', sqrNum);

const halfNum = () => {
    const half = document.getElementById("half").value;
    result.innerHTML = half / 2;
}
const halfBtn = document.getElementById('half-btn');
halfBtn.addEventListener('click', halfNum);

const percentNum = () => {
    const percent1 = document.getElementById("percent1").value;
    const percent2 = document.getElementById("percent2").value;
    result.innerHTML = percent1 / percent2 * 100;
}
const prcBtn = document.getElementById('prc-btn');
prcBtn.addEventListener('click', percentNum);

const areaCircle = () => {
    const area = document.getElementById("area").value;
    result.innerHTML = Math.PI * area * area;
}
const areaBtn = document.getElementById('area-btn');
areaBtn.addEventListener('click', areaCircle);


/*
4.Se da un balon. La apasarea tastei ⬆️ sa i se mareasca dimensiunea cu 10%,
iar la apasarea tastei ⬇️ sa i se scada dimensiunea cu 10%.
*/
const balon = document.getElementById('balon');
balon.addEventListener('keydown', e => {

    //e = e || window.event;
    if (e.key == 'ArrowUp') {
        balon.style.width += 100 ;
    } else if (e.key == 'ArrowDown') {
        balon.style.width -= 100;
    }
})