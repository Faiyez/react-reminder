import { useState } from 'react'
const AddTask = ({onAdd}) => {
  // Initial value = text and changed value setText
 
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault()
    if(!text) {
      alert("Please Enter Task")
    }
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className ='add-form' onSubmit = {onSubmit}>
        <div className='form-control form-control-check'>
            <label>Task Name:</label>
            <input type='text' 
            placeholder ='Enter Task'
            value = {text}
            onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Enter Date:</label>
            <input 
            type='text' 
            placeholder='Enter Date and Time'
            value={day} // Value is set to dynamic value text
            onChange = {(e)=>setDay(e.target.value)}
            >
            </input>
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input className = 'btn btn-block' type='submit' value='Save Task'></input>
    </form>
  )
}

export default AddTask