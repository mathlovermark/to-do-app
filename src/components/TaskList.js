import React from 'react';
import TaskHeader from './TaskHeader';

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => {
    return <TaskHeader name={task.name} completed={task.completed} />;
  });
  return <div className="to-do-main">{tasks}</div>;
};
export default TaskList;
