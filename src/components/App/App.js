import './App.scss';
import Header from "../Header/Header";
import TasksListContainer from "../TasksList/TaskListContainer";
import AddTaskContainer from "../AddTask/AddTaskContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <AddTaskContainer />
            <TasksListContainer />
        </div>
    );
}

export default App;
