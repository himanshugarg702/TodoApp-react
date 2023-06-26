import React, { useEffect, useRef } from "react";
import Classes from "./AddTask.module.css";

const AddTask = (props) => {
  const title = useRef(); // useRef for input reference

  useEffect(() => {
    // useEffect for checking editing state
    // Set the input value to the task title if editing
    title.current.value = props.isEdit.edit ? props.isEdit.task.title : "";
  }, [props.isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const taskTitle = title.current.value; // Get the value from the input
    props.addTask(taskTitle); // Call addTask function from props to add the task
    title.current.value = ""; // Reset the input value
  };

  const handleSave = () => {
    const task = props.isEdit.task;
    task.title = title.current.value; // Update the title of the task
    props.updateHandler(task, false); // Call updateHandler function to save the changes
  };

  return (
    <div className={Classes.taskContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <br />
          <input ref={title} type="text" required />
        </div>
        <div>
          {props.isEdit.edit ? (
            <button type="button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button type="submit">ADD TASK</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
