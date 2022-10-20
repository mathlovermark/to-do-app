import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
// import PendingTask from './components/PendingTask';
// import DoneTask from './components/DoneTask';
import Taskpage from './components/Taskpage';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  // List of Initial Tasks
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: 'Eat Breakfast',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Code Wars',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'Play MLBB',
      completed: false,
    },
  ]);

  // UseState for (title, newTask, editTask and editTaskDetails)
  // const [title, setTitle] = useState('');
  const [newTask, setNewTask] = useState(false);
  const [editTaskDetail, setEditTaskDetail] = useState([]);
  const [editTask, showEditTask] = useState(false);

  // Function to change the name in To Do App title once click
  // const titleChangeClick = () => {
  //   let userName = prompt('Enter your name');
  //   if (userName.length > 10) {
  //     alert('Username too long, please put a name that are less than 10');
  //   } else {
  //     let properUserName =
  //       userName.charAt(0).toUpperCase() + userName.substring(1).toLowerCase();
  //     setTitle(properUserName);
  //   }
  // };
  // Function to show task form for new Task
  const showAddTaskForm = () => {
    newTask ? setNewTask(false) : setNewTask(true);
  };

  // Function to show task form for edit Task
  const showEditTaskForm = (completed, id) => {
    //show edit form
    editTask ? showEditTask(false) : showEditTask(completed);
    const indexOfTasks = tasks.findIndex((task) => task.id === id);
    const listTasks = [...tasks];
    setEditTaskDetail(...listTasks.splice(indexOfTasks, 1));
  };

  // Function to hide task form for new Task
  const hideAddTaskForm = (completed) => {
    editTask ? setNewTask(completed) : setNewTask(completed);
  };

  // Function to hide task form for edit Task
  const hideEditTaskForm = (completed) => {
    editTask ? showEditTask(completed) : showEditTask(completed);
  };

  // Function to add a task (if condition to filter if there are duplicate or blank tasks inputted)
  const addTask = (newTask) => {
    let exists = false;
    let newTaskCopy = { ...newTask };
    const taskCopy = [...tasks];
    // check if task is blank
    if (newTaskCopy.name === '') {
      return alert('Please put a task');
    }
    taskCopy.forEach((task) => {
      if (
        task.name.toLowerCase().replace(/[^\w\s]/gi, '') ===
        newTaskCopy.name
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .trim()
      ) {
        alert('The task was already inputted');
        return (exists = true);
      }
    });

    if (exists === false) {
      const task = {
        id: uuidv4(),
        ...newTaskCopy,
      };
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      setNewTask(false);
    }
  };

  // Function that will save changes to the data
  const saveChanges = (i) => {
    let exists = false;
    const taskCopy = [...tasks];

    taskCopy.forEach((task) => {
      if (
        task.name.toLowerCase().replace(/[^\w\s]/gi, '') ===
        i.name
          .toLowerCase()
          .replace(/[^\w\s]/gi, '')
          .trim()
      ) {
        alert('The task was already inputted');
        return (exists = true);
      }
    });

    if (exists === false) {
      const indexOfTask = tasks.findIndex((task) => task.id === i.id);
      taskCopy.splice(indexOfTask, 1, i);
      setTasks(taskCopy);
      showEditTaskForm(false);
    }
    // setTasks(taskCopy);
    // showEditTaskForm(false);
  };

  // Function for Delete Task
  const handleDeleteClick = (id) => {
    //filter
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Function for Complete Task
  const completeTaskHandler = (id) => {
    let newState = [...tasks];
    // console.log('hey this is the start state', tasks);
    //look for the index of the given ID
    const index = newState.findIndex((task) => task.id === id);
    // console.log('hey this is the index', index);

    //change the done from false to true
    newState[index].completed = true;
    // console.log('hey this is the end state', newState);

    //set the State to the new value
    setTasks(newState);
  };

  return (
    <div className="App">
      <div className="app-container">
        <header className="to-do-header">
          <h1 className="to-do-header-title">
            <span className="title-description"> To Do List </span>
          </h1>
          {/* <button
            className="to-do-header-button"
            onClick={() => {
              titleChangeClick();
            }}
          >
            Your Name
          </button> */}
        </header>
        <div className="to-do-add-task">
          <nav className="nav-bar">
            <Link className="nav-item" to="">
              All
            </Link>{' '}
            <Link className="nav-item" to="pending">
              {' '}
              Pending{' '}
            </Link>{' '}
            <Link className="nav-item" to="completed">
              {' '}
              Complete{' '}
            </Link>
          </nav>
          <br />
          {newTask ? (
            <AddTask submit={addTask} hideAddTaskForm={hideAddTaskForm} />
          ) : (
            <button className="add-task-button" onClick={showAddTaskForm}>
              Add a Task
            </button>
          )}
          {editTask ? (
            <EditTask
              editTaskdetails={editTaskDetail}
              saveChanges={saveChanges}
              hideEditTaskForm={hideEditTaskForm}
            />
          ) : (
            ''
          )}
        </div>
        <Routes>
          <Route path="/" element={<TaskList tasks={tasks} />} />
          <Route
            path=":completed"
            element={
              <Taskpage
                tasks={tasks}
                handleDeleteClick={handleDeleteClick}
                editTask={editTask}
                showEditTaskForm={showEditTaskForm}
                completeTaskHandler={completeTaskHandler}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
