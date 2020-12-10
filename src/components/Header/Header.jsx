import "./Header.scss";
import TitleContainer from "./Title/TitleContainer";
import TodoFilterContainer from "./TodoFilter/TodoFilterContainer";

function Header() {
    return (
        <div className="header">
            <TitleContainer/>
            <TodoFilterContainer/>
        </div>
    );
}

export default Header;