
const AddTask = () => {
  return (
    <form className ='add-form'>
        <div className='form-control form-control-check'>
            <label>Task Name:</label>
            <input type='text' placeholder =
            'Enter Task'></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Enter Date:</label>
            <input type='text' placeholder=
            'Enter Date and Time'></input>
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