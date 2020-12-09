import "./TodoFilter.scss";

function TodoFilter() {
    return (
        <ul className="filter">
            <li className="filter__item active">All tasks</li>
            <li className="filter__item">Incomplete</li>
            <li className="filter__item">Completed</li>
        </ul>
    );
}

export default TodoFilter;