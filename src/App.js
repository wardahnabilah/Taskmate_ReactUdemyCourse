import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {
  // Create state for storing tasks
  const [tasks, setTasks] = useState([])

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
  
  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask}/>
      <ShowTask delete={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
