const ADD_TASK = "ADD_TASK";
const NEW_TASK_TEXT_CHANGED = "NEW_TASK_TEXT_CHANGED";
const DONE_TASK = "DONE_TASK";
const DELETE_TASK = "DELETE_TASK";
const SET_FILTER = "SET_FILTER";

const now = new Date();
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const nowString = `${weekDays[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Implement adding tasks by hit Enter button on input',
            isComplete: false
        },
        {
            id: 2,
            text: 'Implement storing tasks in local storage',
            isComplete: false
        },
    ],
    newTodoText: '',
    filterTodosOption: 'ALL',
    headerDate: nowString
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
        case SET_FILTER:
            return {...state, filterTodosOption: action.option}
        default:
            return state;
    }
}

export const addTaskAC = (todoText) => ({type: ADD_TASK, todoText});
export const newTaskTextChangedAC = (newText) => ({type: NEW_TASK_TEXT_CHANGED, newText});
export const doneTaskAC = (taskId) => ({type: DONE_TASK, taskId});
export const deleteTaskAC = (taskId) => ({type: DELETE_TASK, taskId});
export const setFilterAC = (option) => ({type: SET_FILTER, option});

export default todoReducer;