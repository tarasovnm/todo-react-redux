import TasksList from "./TasksLIst";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        todos: state.todoList.todos
    }
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

const TasksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksListContainer;