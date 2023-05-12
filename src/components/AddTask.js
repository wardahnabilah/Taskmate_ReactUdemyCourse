import { useState } from "react"

export default function AddTask(props) {
    // Create state for new task
    const [newTask, setNewTask] = useState({
        id: "",
        task: "",
        time: ""
    })

    function handleChange(event) {
        const date = new Date()

        const taskId = date.getTime()
        const task = event.target.value
        const time = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        
        setNewTask({
            id: taskId,
            task: task,
            time: time
        })
        
    }

    function submitTask(event) {
        props.addTask(newTask)
        setNewTask({
            id: "",
            task: "",
            time: ""
        })
        event.preventDefault()
    }
    
    return (
        <div className="addTask"> 
            <form onSubmit={submitTask}>
                <input onChange={handleChange} value={newTask.task} type="text" placeholder="add task" />
                <button>Add</button>
            </form>
        </div>
    )
}