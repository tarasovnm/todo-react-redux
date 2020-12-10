import {connect} from "react-redux";
import AddTask from "./AddTask";
import {addTaskAC, newTaskTextChangedAC} from "../../redux/todoReducer";

let mapStateToProps = (state) => {
    return {
        newTodoText: state.todoList.newTodoText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newTodoTextChanged: (text) => {dispatch(newTaskTextChangedAC(text))},
        addTask: (todoText) => {dispatch(addTaskAC(todoText))},
    };
}

const AddTaskContainer = connect(mapStateToProps, mapDispatchToProps)(AddTask);

export default AddTaskContainer;