import React from 'react';
import { useParams } from 'react-router';
import Task from './Task';

const Taskpage = ({
  tasks,
  completeTaskHandler,
  handleDeleteClick,
  editTask,
  showEditTaskForm,
}) => {
  const { completed } = useParams();

  let filter = completed.toLowerCase() === 'completed' ? true : false;

  return (
    <div>
      {tasks
        .filter((task) => task.completed === filter)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            completeTaskHandler={completeTaskHandler}
            handleDeleteClick={handleDeleteClick}
            editTask={editTask}
            showEditTaskForm={showEditTaskForm}
          />
        ))}
    </div>
  );
};

export default Taskpage;
