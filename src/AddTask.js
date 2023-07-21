import React, { useState } from "react";

function AddTask( { addTask } ) {
    const [task, setTask] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask('');
        e.target.reset();
    };

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };
    
    return (
        <form onSubmit={ handleFormSubmit }>
            <input type="text" placeholder="Add a task" onChange={handleInputChange}/>
            <button type="submit">Add</button>
        </form> 
    ); 
}

export default AddTask;