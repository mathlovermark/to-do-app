import React from 'react';

const TaskHeader = ({ name, completed }) => {
  const componentToShow = () => {
    if (completed) {
      return (
        <>
          <span className="complete-task-icon">
            <i className="fa-solid fa-circle-check"></i>
          </span>
        </>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="to-do-list grid-container">
      <h3> {name} </h3>
      <div className="grid-item-2">{componentToShow()}</div>
    </div>
  );
};

export default TaskHeader;
