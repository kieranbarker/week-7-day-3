import { nanoid } from "nanoid";
import { useState } from "react";

import Task from "./Task.jsx";
import TaskForm from "./TaskForm.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "task-cMrDjh1EpqvIO9wTO0Tc7",
      text: "Walk the dogs",
      isComplete: true,
    },
    {
      id: "task-KmIKx7YTZYs5yWf1pDGva",
      text: "Buy groceries",
      isComplete: false,
    },
    {
      id: "task-hJV9HSOLSDe2QbNZUptHH",
      text: "Work out",
      isComplete: false,
    },
  ]);

  function addTask(text) {
    const newTask = { id: `task-${nanoid()}`, text, isComplete: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? (
        <ul className="taskList">
          {tasks.map((task) => (
            <Task {...task} key={task.id} toggleTask={toggleTask} />
          ))}
        </ul>
      ) : (
        <p>Add some tasks...</p>
      )}
    </>
  );
}

export default App;
