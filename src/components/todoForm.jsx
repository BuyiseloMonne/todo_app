import React, { useState } from 'react'
import '../css/styleform.css'
import { FaPlus } from 'react-icons/fa';

function MyForm({onAdd}) {

    const [taskName, setTaskName] = useState('');
    function handleSubmit(ev){
        ev.preventDefault()
        onAdd(taskName)
        setTaskName(' ')

    }

  return (
    <form className='form' onSubmit={handleSubmit}>
        
        <input type="text"  value = {taskName}
             onChange={ev =>setTaskName(ev.target.value)}
             placeholder='New task...'/>
             <button className='buttonAdd'> <FaPlus size={15} color="currentColor" /> </button>
    </form>
  )
}

export default MyForm