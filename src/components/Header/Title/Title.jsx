import "./Title.scss";

function Title({dateString, activeTodos}) {
    return (
        <div className="title">
            <h2 className="title__date">{dateString}</h2>
            <p className="title__tasks">{activeTodos} Active Tasks</p>
        </div>
    );
}

export default Title;