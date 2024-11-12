function Task(props) {
  let className = "task";

  if (props.isComplete) {
    className += " task-isComplete";
  }

  return (
    <li className={className}>
      <label>
        <input
          type="checkbox"
          checked={props.isComplete}
          onChange={() => props.toggleTask(props.id)}
        />
        {props.text}
      </label>
    </li>
  );
}

export default Task;
