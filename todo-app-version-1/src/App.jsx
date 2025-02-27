import AddToDo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import "./App.css";

function App(){
  return <>
  <center class='todo-container'>
  
    <AppName />
    <div className="todo-list">
    <AddToDo />
    <ToDoItem1 />
    <ToDoItem2 />
    </div>
  </center>
  </>
}

export default App;