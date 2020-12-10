const ADD_TASK = "ADD_TASK";
const NEW_TASK_TEXT_CHANGED = "NEW_TASK_TEXT_CHANGED";
const DONE_TASK = "DONE_TASK";
const DELETE_TASK = "DELETE_TASK";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Client meeting',
            isComplete: true
        },
        {
            id: 2,
            text: 'Design app interface',
            isComplete: false
        },
        {
            id: 3,
            text: 'Learn node.js',
            isComplete: false
        }
    ],
    newTodoText: ''
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_TASK_TEXT_CHANGED:
            return {...state, newTodoText: action.newText};
        case ADD_TASK:
            if (action.todoText !== '') {
                return {...state,
                    todos: [...state.todos, {id: +new Date(), text: action.todoText, isComplete: false}],
                newTodoText: ''}
            }
            return state;
        case DONE_TASK:
            return {...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.taskId) {
                    let isDone = ! todo.isComplete
                    return {...todo, isComplete: isDone}
                }
                return todo;
            })};
        case DELETE_TASK:
            return {...state,
                todos: state.todos.filter(todo => {
                    return todo.id !== action.taskId;
                })};
        default:
            return state;
    }
}

export const addTaskAC = (todoText) => ({type: ADD_TASK, todoText});
export const newTaskTextChangedAC = (newText) => ({type: NEW_TASK_TEXT_CHANGED, newText});
export const doneTaskAC = (taskId) => ({type: DONE_TASK, taskId});
export const deleteTaskAC = (taskId) => ({type: DELETE_TASK, taskId});

export default todoReducer;