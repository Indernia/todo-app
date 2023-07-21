import React from 'react';
import './Task.css';

function TodoItem( { Task, isDone, toggleDone, deleteTask, index }) {
    return (
        <div className="todo-item">
            <p className={isDone ? "done" : ""}>{Task.task}</p>
            <div className="todo-item-buttons">
                <button onClick={() => toggleDone(index)}>Done</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
        </div>
    );
}

export default TodoItem