import TodoFilter from "./TodoFilter";
import {connect} from "react-redux";
import {setFilterAC} from "../../../redux/todoReducer";

let mapStateToProps = (state) => {
    return {
        filterTodosOption: state.todoList.filterTodosOption
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFilterOption: (option) => dispatch(setFilterAC(option))
    };
}

const TodoFilterContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

export default TodoFilterContainer;
