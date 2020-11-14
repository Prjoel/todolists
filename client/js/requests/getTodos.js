import displayTodos from "/client/js/displayTodos.js";
/*
export default function getTodos() {
  fetch('http://localhost:8080/api/todos', {headers: {'content-type': 'aplication/json', 'Access-Control-Allow-Origin': 'true'}})
  .then(response => {
    if(response.ok){
      return response.json();
    } else throw new Error('Failed getting todo items. ');
  })
  .then(data => {
    console.log('data.data :>> ', data.data);
    displayTodos(data.data)
    
  }).catch( error => { console.log(error) })
}
*/


//prueba --------------------------------
let todo = [{
  title: 'Todo title ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: false,
  duedate: 'monday',
  id: 1,
}, {
  title: 'Second todo title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, que lacreo nomelo creo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: false,
  duedate: '20/05',
  id: 2,
}, {
  title: 'third todo title',
  description: 'Que lacreo nomelo creo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: true,
  duedate: '20/06',
  id: 3,
}, {
  title: 'another todo title',
  description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: false,
  duedate: '28/05',
  id: 4,
}, {
  title: 'more titles',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  completed: true,
  duedate: '20/05',
  id: 5,
}, {
  title: 'Todo title but loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong ',
  description: 'Lorem ipsum dolor sit amet, c0onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: false,
  duedate: 'monday',
  id: 6,
}, {
  title: 'Todo title ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  completed: false,
  duedate: 'tomorrow',
  id: 7,
}]
export default function getTodos() {
  displayTodos(todo) 
  return todo;
}