import './App.scss';
import Header from "../Header/Header";
import AddTask from "../AddTask/AddTask";
import TasksListContainer from "../TasksList/TaskListContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <AddTask />
            <TasksListContainer />
        </div>
    );
}

export default App;
