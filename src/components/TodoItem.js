export default function TodoItem(props) {
    return (
        <li>
            <p>
                <span className="name">{props.task}</span>
                <span className="time">{props.time}</span>
            </p>
            <i className="bi-pencil-square"></i>
            <i className="bi-trash" onClick={() => { props.delete(props.id) }}></i>
        </li>
    )
}