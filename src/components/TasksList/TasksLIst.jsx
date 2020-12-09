import './TasksList.scss';

// const todos = [
//     {
//         id: 1,
//         text: 'Client meeting',
//         isComplete: true
//     },
//     {
//         id: 2,
//         text: 'Design app interface',
//         isComplete: false
//     },
//     {
//         id: 3,
//         text: 'Learn node.js',
//         isComplete: false
//     }
// ]

function TasksList({todos}) {

    let todoList = todos.map(todo => {
        let doneClass = todo.isComplete ? " done" : "";
        return (
            <li className={"task" + doneClass} key={todo.id}>
                <span className="task__check material-icons">check_circle_outline</span>
                <p className="task__text">{todo.text}</p>
                <button className="task__del">
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