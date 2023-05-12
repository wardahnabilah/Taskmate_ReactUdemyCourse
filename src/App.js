import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {
  // Create state for storing tasks
  const [tasks, setTasks] = useState([])

  function addTask(newTask) {
    setTasks(prev => {
      return [...prev, newTask]
    })
  }
  
  return (
    <div className="App">
      <Header />
      <AddTask addTask={addTask}/>
      <ShowTask tasks={tasks}/>
    </div>
  );
}

export default App;
