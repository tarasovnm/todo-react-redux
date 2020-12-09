import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="title">
                    <h2 className="title__date">Wednesday, December 9</h2>
                    <p className="title__tasks">3 Active Tasks</p>
                </div>
                <ul className="filter">
                    <li className="filter__item active">All tasks</li>
                    <li className="filter__item">Incomplete</li>
                    <li className="filter__item">Completed</li>
                </ul>
            </div>
            <div className="add">
                <input className="add__text" type="text" placeholder="Enter a task" value=""/>
                <button className="add__btn">Add Task</button>
            </div>
            <ul className="tasks_list">
                <li className="task done">
                    <span className="task__check material-icons">check_circle_outline</span>
                    <p className="task__text">Client meeting</p>
                    <button className="task__del">
                        <span className="material-icons">delete_forever</span>
                    </button>
                </li>
                <li className="task">
                    <span className="task__check material-icons">check_circle_outline</span>
                    <p className="task__text">Design app interface</p>
                    <button className="task__del">
                        <span className="material-icons">delete_forever</span>
                    </button>
                </li>
                <li className="task">
                    <span className="task__check material-icons">check_circle_outline</span>
                    <p className="task__text">Learn node.js</p>
                    <button className="task__del">
                        <span className="material-icons">delete_forever</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default App;
