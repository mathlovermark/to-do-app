import React from 'react';
import Tasklist from './TaskList';

const DoneTask = (props) => {
  return (
    <div>
      <Tasklist tasks={props.tasks} />
    </div>
  );
};

export default DoneTask;
