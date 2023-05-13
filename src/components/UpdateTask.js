import { useState } from "react"

export default function UpdateTask(props) {
    // Create state for updated task
    const [updatedTask, setUpdatedTask] = useState(props.taskBeingUpdated)

    function handleChange(event) {
        const date = new Date()

        const task = event.target.value
        const time = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        
        setUpdatedTask(prev => {
            return {
                ...prev,
                task: task,
                time: time
            }
        })

    }

    function submitTask(event) {
        props.submitUpdatedTask(updatedTask)
        setUpdatedTask({
            id: "",
            task: "",
            time: ""
        })
        event.preventDefault()
    }
    
    return (
        <div className="addTask"> 
            <form onSubmit={submitTask}>
                <input onChange={handleChange} value={updatedTask.task} type="text" placeholder="add task" />
                <button>Update</button>
            </form>
        </div>
    )
}