import generateWrapper from '/client/js/components/generateWrapper.js';
import generateHeader from '/client/js/components/generateHeader.js'; 
//generateHeader([text]) The argument is a string and is optional. It would replace the default header "TodoList" with the new string. 
import generateTodoInput from '/client/js/components/generateTodoInput.js'; 
import generateList from '/client/js/components/generateList.js'; 


export default function generateApp(headerText) {
  generateWrapper()
  generateHeader(headerText)
  generateTodoInput()
  generateList()
}