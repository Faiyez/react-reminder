import Header from './Components/Header'
import Tasks from './Components/Tasks'
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
  return (
    <div>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}
export default App;
