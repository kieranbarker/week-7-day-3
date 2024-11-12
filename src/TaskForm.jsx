import { useState } from "react";

function TaskForm(props) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(text);
    setText("");
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <p>
        <label className="taskForm-label" htmlFor="new-task">
          New task
        </label>
        <input
          id="new-task"
          className="taskForm-input"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </p>
      <p>
        <button>Add task</button>
      </p>
    </form>
  );
}

export default TaskForm;
