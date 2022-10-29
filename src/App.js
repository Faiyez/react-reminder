// rafce npm start 
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import {useState} from 'react'
const App = () => {
  const [tasks, setTasks] = useState(
    [
        {id: 1,
         text: 'Soccer Game',
         day:'June 1, 2022',
         reminder: true
        },
        {id:2,
        text: 'Movie Night',
        day: 'June 2, 2022',
        reminder: true
        },
        {
        id: 3,
        text: 'Clothes Shopping',
        day: 'June 4, 2022',
        reminder: false,
        }
    ])
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))  
    }
    const toggleReminder = (id) =>{
      setTasks(tasks.map((task) => 
      task.id === id ? {
        ...task, reminder: !task.reminder}: task))
    }
  return (
    <div className = 'container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask}
      onToggle = {toggleReminder}/>)
      : ('Empty Tasks')}
    </div>
  )
}
export default App;
