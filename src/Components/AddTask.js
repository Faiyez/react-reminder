import { useState } from 'react'
const AddTask = () => {
  // Initial value = text and changed value setText
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')
  return (
    <form className ='add-form'>
        <div className='form-control form-control-check'>
            <label>Task Name:</label>
            <input type='text' placeholder =
            'Enter Task'></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Enter Date:</label>
            <input 
            type='text' 
            placeholder='Enter Date and Time'
            value={text} // Value is set to dynamic value text
            onChange = {(e) => setText(e.target.value)}
            >
            
            </input>
        </div>
        <div className='form-control'>
            <label>Set Reminder</label>
            <input type='checkbox'></input>
        </div>
        <input className = 'btn btn-block' type='submit' value='Save Task'></input>
    </form>
  )
}

export default AddTask