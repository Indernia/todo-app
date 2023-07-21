import './App.css';
import Task from './Task';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);


  const addTask = (task) => {
    const newTask = {task, isDone: false, isDeleted:false}
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }
  
  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
    localStorage.setItem('tasks',JSON.stringify(newTasks));
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDeleted = true;
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  return (
    <div className="App">
      <div>
        <h1>Todo App</h1>
        <AddTask addTask={addTask} />
      </div>
      <div className="todo-list">
        {tasks.map((task, index) => (
          !task.isDeleted && <Task key={index} index={index} Task={task} isDone={task.isDone} toggleDone = {(index) => toggleDone(index)} deleteTask={(index) => deleteTask(index)} />   
        ))}
      </div>
    </div>
  );
}

export default App;
