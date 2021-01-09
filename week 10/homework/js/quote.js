

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'json';
request.send();

request.onload = () => {
    const quote = request.response;
    showQuote(quote);
}

const showQuote = (obj) =>{
    const quote = obj;
    let rslt = document.getElementById('quote');
    const btn = document.getElementById('xhr');
    btn.addEventListener('click',()=>{
        rslt.innerHTML = quote;
    })

}
