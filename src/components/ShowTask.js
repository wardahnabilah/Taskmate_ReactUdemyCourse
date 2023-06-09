import TodoItem from "./TodoItem";

export default function ShowTask(props) {
    return (
        <section className="showTask">
            <p className="head">
                <span>
                    <span className="title">Todo</span>
                    <span className="count">{props.tasks.length}</span>
                </span>
                <span onClick={() => props.clearAll()}className="clearAll">Clear All</span>
            </p>
            <ul>
                {props.tasks.map(task => {
                    return <TodoItem 
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        time={task.time}
                        delete={props.delete}
                        update={props.update}
                    />
                })}
            </ul>
        </section>
    )
}