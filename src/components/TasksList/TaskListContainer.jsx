import TasksList from "./TasksLIst";
import {connect} from "react-redux";
import {deleteTaskAC, doneTaskAC} from "../../redux/todoReducer";

let mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos
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