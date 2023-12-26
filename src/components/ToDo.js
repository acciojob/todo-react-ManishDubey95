import React, { useState } from "react";

const ToDo = () => {
  const [list, setList] = useState("");
  const [tasks, setTasks] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);

  function addList(event) {
    event.preventDefault();
    setBtnClicked(true);
    setTasks([...tasks, list]);
    setList("");
  }

  function deleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <p>To-Do List</p>

      <form onSubmit={addList}>
        <input
          type="text"
          placeholder="Write here..."
          onChange={(event) => setList(event.target.value)}
          value={list}
        />
        <button type="submit">Add Todo</button>
      </form>

      <div>
        {btnClicked && (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDo;


