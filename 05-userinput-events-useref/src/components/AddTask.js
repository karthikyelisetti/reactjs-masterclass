import React, { useState } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
//   const taskRef = useRef();

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  }

  const handleReset = () => {
    setTaskValue("");
    setProgress("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
        id: Math.round(Math.random() * 10000),
        name: taskValue,
        completed: Boolean(progress),
    }
    setTasks([...tasks, task ]);
    handleReset();
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskValue}
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          onChange={handleChange}
        />
        <select onChange={(event) => setProgress(event.target.value)} value={progress}>
            <option value={false}>In Progress</option>
            <option value={true}>Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};
