import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import UpdateTask from './components/UpdateTask';
import './App.css';

function App() {
  // Create state for storing tasks
  const [tasks, setTasks] = useState([])
  // Is being updated or not
  const [isUpdated, setIsUpdated] = useState(false)
  // Create state for task being updated
  const [taskBeingUpdated, setTaskBeingUpdated] = useState({
    id: "",
    task: "",
    time: ""
})

  // Add new task
  function addTask(newTask) {
    setTasks(prev => {
      return [...prev, newTask]
    })
  }

  // Delete task
  function deleteTask(id) {
    setTasks(() => {
      return tasks.filter(task => task.id !== id)
    })
  }
  
  function updateTask(id) {
    // Set isUpdated state to true
    setIsUpdated(true)

    // Store task being updated
    const taskBeingUpdated = tasks.find(task => task.id === id)
    setTaskBeingUpdated(taskBeingUpdated)
    console.log(taskBeingUpdated);
  }

  // Store updated task
  function submitUpdatedTask(updatedTask) {
    setTasks(tasks.map(task => {
      return task.id == updatedTask.id ? updatedTask : task
    }))

    setIsUpdated(false)
  }

  return (
    <div className="App">
      <Header />
      {isUpdated === true ? <UpdateTask submitUpdatedTask={submitUpdatedTask} taskBeingUpdated={taskBeingUpdated}/> : <AddTask addTask={addTask}/>}
      <ShowTask update={updateTask} delete={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
