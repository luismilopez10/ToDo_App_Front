import React, { useContext } from 'react'
import { Store } from './StoreProvider'
import { BiTrashAlt } from 'react-icons/bi'

const TaskList = () => {

    const {state, dispatch} = useContext(Store)

    const onCheckbox = (event, note) => {
        const checked = event.currentTarget.checked;
        dispatch({
            type: 'update-note',
            payload: {...note,
            done: checked}
        })
    }

    const onDelete = (note) => {
        dispatch({
            type: 'remove-note',
            payload: note
        })
    }

  return (
    <div>
        <h1>Your tasks</h1>
        <ul>
            {state.lstTask.map(note => {
                return (
                <li key={note.id} className='task' style={note.done ? {textDecoration: 'line-through'} : {}}>
                    <h3>{note.title} <BiTrashAlt onClick={() => onDelete(note)} /></h3>
                    <h5>
                        {note.message}
                        <input className='form-control-check' onChange={(ev) => onCheckbox(ev, note)} type="checkbox" checked={note.done} />
                    </h5>                    
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TaskList