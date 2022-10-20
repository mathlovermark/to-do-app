import React, { useState } from 'react';

const EditTask = ({ editTaskdetails, saveChanges, hideEditTaskForm }) => {
  const [editTask, setEditTask] = useState({
    id: editTaskdetails.id,
    name: editTaskdetails.name,
    completed: editTaskdetails.completed,
  });

  const onChange = (e) => {
    const inputName = e.target.name;

    switch (inputName) {
      case 'name':
        setEditTask({
          ...editTask,
          name: e.target.value,
        });
        break;
      default:
        break;
    }
  };
  const onEditTask = (e) => {
    e.preventDefault();
    saveChanges(editTask);
  };

  const hideTaskForm = (e) => {
    e.preventDefault();
    hideEditTaskForm(false);
  };

  return (
    <div>
      <div>
        <input
          name="name"
          className="add-task-input-box"
          type="text"
          value={editTask.name}
          placeholder="Input a task here"
          required
          onChange={onChange}
        />
      </div>
      {/* <input name="id" value={editTask.id} type="hidden" /> */}
      <button
        className="submit-button"
        value={editTask.name}
        onClick={onEditTask}
      >
        Submit
      </button>
      &nbsp;
      <button className="cancel-button" onClick={hideTaskForm}>
        Cancel
      </button>
    </div>
  );
};

export default EditTask;
