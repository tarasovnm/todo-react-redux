import "./Header.scss";
import Title from "./Title/Title";
import TodoFilter from "./TodoFilter/TodoFilter";

function Header() {
    return (
        <div className="header">
            <Title/>
            <TodoFilter/>
        </div>
    );
}

export default Header;