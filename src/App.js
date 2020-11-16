import { useState } from "react"
import "./App.css";

function App() {
  // create state handlers for the todo
  const [newTodo, setNewTodo] = useState("")

  // connect the state handler with the input
  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  const [todos, setTodos] = useState(["cook", "clean"])

  const handleClick = () => {

    if (newTodo !== "") {
      // create a new array that stores old todos and the new one
      const newTodos = [...todos, newTodo]
      // set the todos state to the newly created array
      setTodos(newTodos)

      // set the newTodo to "" (reset it)
      setNewTodo("")
    }
  }
  return (
    <div>
      <div className="add-todo-box">
        <input value={newTodo} onChange={handleChange} placeholder="Add a todo here..." className="input" type="text" />
        <button onClick={handleClick} className="button">Add todo</button>
      </div>
      <h3>Todos:</h3>
      {todos.map(todo => {
        return <p className="todo">{todo}</p>
      })
      }
    </div>
  );
}

export default App;
