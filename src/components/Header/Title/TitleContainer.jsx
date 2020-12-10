import {connect} from "react-redux";
import Title from "./Title";

let mapStateToProps = (state) => {
    return {
        dateString: state.todoList.headerDate,
        activeTodos: state.todoList.todos.filter(todo => todo.isComplete === false).length
    }
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

const TitleContainer = connect(mapStateToProps, mapDispatchToProps)(Title);

export default TitleContainer;