import API_URL from './config/var.js';

function getTodosAPI() {
  fetch(API_URL + '/api/todos')
  .then(res => res.json())
  .then(data => console.log('returned TODO data :>> ', data))
  .catch(err => console.log('err :>> ', err))
}

let button = document.querySelector('#getTodos-button');

button.addEventListener('click', getTodosAPI);