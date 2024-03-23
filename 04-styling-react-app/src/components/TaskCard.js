import React from "react";
import "./TaskCard.css";
import style from "./TaskCard.module.css";

export const TaskCard = ({ task, handleDelete }) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        <span className={style.title}>
          {task.id}-{task.name}
        </span>
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};
