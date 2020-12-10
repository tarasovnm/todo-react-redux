import "./TodoFilter.scss";

function TodoFilter({filterTodosOption, setFilterOption}) {
    return (
        <ul className="filter">
            <li className={"filter__item " + (filterTodosOption === 'ALL' ? "active" : "")}
                onClick={() => setFilterOption('ALL')}>
                All tasks
            </li>
            <li className={"filter__item " + (filterTodosOption === 'INCOMPLETE' ? "active" : "")}
                onClick={() => setFilterOption('INCOMPLETE')}>
                Incomplete
            </li>
            <li className={"filter__item " + (filterTodosOption === 'COMPLETED' ? "active" : "")}
                onClick={() => setFilterOption('COMPLETED')}>
                Completed
            </li>
        </ul>
    );
}

export default TodoFilter;