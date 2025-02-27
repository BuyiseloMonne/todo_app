import React, { useState } from 'react'
import '../css/styletodo.css'
import Mycheckbox from './checkbox'
import { MdDelete } from 'react-icons/md';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function MyTodo({name,done, onToggle,onTrash,onRename}) {
   
    const [editMode, setEditMode] =useState(false)
    
    
   
  return (
   <div className='body'>
    <div className='task'>
       
       <Mycheckbox Checked = {done} onClick = {() => onToggle(!done)}/>

    {!editMode && (
         <div className='task-name' onClick={() => setEditMode(prev => !prev)}>
     
         <span> {name}</span>
         </div> 

    )}

    {editMode && (

      
       <form>
        <input type="text" value={name}
                  onChange = {ev => onRename(ev.target.value)}
        />
            
        </form>
        
       
    )}
    
       <button className='delete' onClick={() => onTrash(done)}><MdDelete size={24} color="currentColor" /></button>
        
    </div>

    </div>
  )
}



   
export default MyTodo