import React from 'react';

const Task = ({
  id,
  name,
  completed,
  completeTaskHandler,
  editTask,
  showEditTaskForm,
  handleDeleteClick,
}) => {
  const componentToShow = () => {
    if (completed) {
      return (
        <>
          <span className="complete-task-icon">
            <i className="fa-solid fa-circle-check"></i>
          </span>
          <span
            className="task-button task-delete-complete"
            onClick={() => handleDeleteClick(id)}
          >
            <i className="fa-solid fa-trash"></i>
          </span>
        </>
      );
    } else if (!completed) {
      return (
        <>
          <span
            className="task-complete-button task-button"
            onClick={() => {
              completeTaskHandler(id);
            }}
          >
            <i className="fa-solid fa-circle-check"></i>
          </span>
          {editTask ? (
            ''
          ) : (
            <span
              className="task-edit-button task-button"
              onClick={() => showEditTaskForm(true, id)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          )}
          <span
            className="task-delete-button task-button"
            onClick={() => handleDeleteClick(id)}
          >
            <i className="fa-solid fa-trash"></i>
          </span>
        </>
      );
    } else {
      return <div>{/* <h1> No data projected </h1> */}</div>;
    }
  };

  return (
    <div className="to-do-list grid-container">
      <div className="grid-item-1">
        <h3> {name} </h3>
      </div>
      <div className="grid-item-2">{componentToShow()}</div>
    </div>
  );
};

export default Task;
