import './TasksList.scss';

function TasksList({todos, doneTask, deleteTask}) {

    let todoList = todos.map(todo => {
        let doneClass = todo.isComplete ? " done" : "";
        return (
            <li className={"task" + doneClass} key={todo.id}>
                <span className="task__check material-icons"
                      onClick={() => doneTask(todo.id)}>check_circle_outline</span>
                <p className="task__text">{todo.text}</p>
                <button className="task__del" onClick={() => deleteTask(todo.id)}>
                    <span className="material-icons">delete_forever</span>
                </button>
            </li>
        );
    })

    return (
        <ul className="tasks_list">
            {todoList}
        </ul>
    );
}

export default TasksList;