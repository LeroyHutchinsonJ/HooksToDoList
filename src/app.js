import React from "react";
import { useState } from "react";

var ToDo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

function App() {
  var [todos, setTodos] = useState([
    {
      text: "Learn About React",
      isCompleted: false
    },
    {
      text: "Make a mini todo List",
      isCompleted: false
    },
    {
      text: "Meat is friend not food",
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div>
            <ToDo key={index} index={index} todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
