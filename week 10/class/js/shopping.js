



const postItem = () => {
    let addItem = document.getElementById('add').value;
    let items = document.getElementById('items');
    let item = document.createElement('li');
    item.textContent = addItem;
    items.appendChild(item);
    
}

const button = document.getElementById('button');
button.addEventListener('click', postItem);

const remove = document.getElementById('remove');
const removeLastItem = () =>{
    let items = document.getElementById('items');
    let item = document.querySelector('li');
    items.removeChild(item);
}
remove.addEventListener('click', removeLastItem);