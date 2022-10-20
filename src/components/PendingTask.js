import React from 'react';
import Tasklist from './TaskList';

const Pendingtask = (props) => {
  return (
    <div>
      <Tasklist tasks={props.tasks} completeTask={props.completeTask} />
    </div>
  );
};

export default Pendingtask;
