import "./AddTask.scss";
import React from "react";

function AddTask({newTodoText, newTodoTextChanged, addTask}) {
    let newTodoElement = React.createRef();

    let textChanged = () => {
        let text = newTodoElement.current.value;
        newTodoTextChanged(text);
    }

    let addNewTask = () => {
        let text = newTodoElement.current.value;
        addTask(text);
    }

    return (
        <div className="add">
            <input className="add__text"
                   type="text"
                   placeholder="Enter a task"
                   value={newTodoText}
                   onChange={textChanged}
                   ref={newTodoElement}/>
            <button className="add__btn" onClick={addNewTask}>Add Task</button>
        </div>
    );
}

export default AddTask;