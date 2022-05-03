import React from "react";
import { useState, ChangeEvent } from "react";
import { Itext } from "./Interfaces";
import "./App.css";
import TodoText from "./Components/TodoText";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [Age, setAge] = useState<number>(0);
  const [todo, setTodo] = useState<Itext[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "text") {
      setTask(event.target.value);
    } else {
      setAge(Number(event.target.value));
    }
    setTask(event.target.value);
  };
  const addText = (): void => {
    const newText = { textName: task, age: Age };
    setTodo([...todo, newText]);
    console.log(todo, "hii");
  };
  const completeTask =(taskNameToDelete:string):void=>{
    setTodo(todo.filter((task)=>{
      return task.textName !== taskNameToDelete
    }))
  };

  return (
    <div className="App">
      <h1>Learn redux typescript</h1><hr/>
      <div className="header">
        <div className="inputcontainer">
          <input
            type="text"
            placeholder="Enter text"
            name="text"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter number"
            name="age"
            value={Age}
            onChange={handleChange}
          />
          <button onClick={addText}>Submit</button>
        </div>
      </div>
      <div className="todolist">
      <h2>Todo list</h2><hr/>

      {todo.map((task:Itext,key:number)=>{
        return <TodoText key={key} task={task} completeTask={completeTask}/>
      })}
       
      </div>
    </div>
  );
};
export default App;
