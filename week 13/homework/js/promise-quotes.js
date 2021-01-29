import get from "./promiseModule.js";


let requestURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

const showQuote = (obj) =>{
  const quote = obj;
  let rslt = document.getElementById('quote');
  const btn = document.getElementById('xhr');
  btn.addEventListener('click',()=>{
      rslt.innerHTML = quote;
  })

}

get(requestURL).then(function(response) {
  return JSON.parse(response);
}).then(function(response) {
  //console.log(response);
  showQuote(response);
});