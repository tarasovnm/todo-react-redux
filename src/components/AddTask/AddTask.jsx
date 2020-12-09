import "./AddTask.scss";

function AddTask() {
    return (
        <div className="add">
            <input className="add__text" type="text" placeholder="Enter a task" value=""/>
            <button className="add__btn">Add Task</button>
        </div>
    );
}

export default AddTask;