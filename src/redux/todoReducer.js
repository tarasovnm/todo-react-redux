const ADD_TASK = "ADD_TASK";
const NEW_TASK_TEXT_CHANGED = "NEW_TASK_TEXT_CHANGED";
const DONE_TASK = "DONE_TASK";

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

    return state;
}

export const addTaskAC = (todoText) => ({type: ADD_TASK, todoText});
export const newTaskTextChangedAC = (newText) => ({type: NEW_TASK_TEXT_CHANGED, newText});
export const doneTaskAC = (taskId) => ({type: DONE_TASK, taskId});

export default todoReducer;