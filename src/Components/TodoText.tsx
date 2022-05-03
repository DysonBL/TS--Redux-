import React from "react";
import { Itext } from "../Interfaces";
import "../App.css"
interface Props {
  task: Itext;
  completeTask(taskNameToDelete:string):void;
}
const TodoText = ({ task,completeTask }: Props) => {
  return (
  <div className="task col-6 sm-3">
      <div className="content col-6">
      <span>{task.textName}</span>
      <span>{task.age}</span>
      <button onClick={()=>{completeTask(task.textName)}} >x</button>

      </div>
     
  </div>
  )
};

export default TodoText;
