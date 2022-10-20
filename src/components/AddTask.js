import React, { useState } from 'react';

const AddTask = (props) => {
  // Blank data to be add on the Initial Task
  const [task, setTask] = useState({
    name: '',
    completed: false,
  });

  // Function that will add value on the blank data
  const onChange = (e) => {
    const inputName = e.target.name;

    switch (inputName) {
      case 'name':
        setTask({
          ...task,
          name: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  // Function for submit button
  const onSubmitTask = (e) => {
    e.preventDefault();
    props.submit(task);
  };

  // Function for cancel button
  const cancelTask = (e) => {
    e.preventDefault();
    props.hideAddTaskForm(false);
  };

  return (
    <div>
      <div>
        <input
          name="name"
          className="add-task-input-box"
          type="text"
          placeholder="Input a task here"
          required
          onChange={onChange}
        />
      </div>
      <button className="submit-button" onClick={onSubmitTask}>
        Submit
      </button>
      &nbsp;
      <button className="cancel-button" onClick={cancelTask}>
        Cancel
      </button>
    </div>
  );
};

export default AddTask;
