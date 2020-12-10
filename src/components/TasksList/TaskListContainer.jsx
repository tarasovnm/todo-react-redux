import TasksList from "./TasksLIst";
import {connect} from "react-redux";
import {deleteTaskAC, doneTaskAC} from "../../redux/todoReducer";

const getListToShow = (list, option) => {
    switch (option) {
        case 'All':
            return list;
        case 'INCOMPLETE':
            return list.filter(item => item.isComplete === false);
        case 'COMPLETED':
            return list.filter(item => item.isComplete === true);
        default:
            return list;
    }
}

let mapStateToProps = (state) => {
    return {
        todos: getListToShow(state.todoList.todos, state.todoList.filterTodosOption)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        doneTask: (todoId) => dispatch(doneTaskAC(todoId)),
        deleteTask: (todoId) => dispatch(deleteTaskAC(todoId))
    };
}

const TasksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksListContainer;