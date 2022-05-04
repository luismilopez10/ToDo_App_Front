import React, { useContext } from 'react'
import { Store } from './StoreProvider'

const TaskList = () => {

    const {state, dispatch} = useContext(Store)

    console.log(state);

  return (
    <div>
        <h1>Actions pending to be done</h1>
        <ul>
            {state.lstTask.map(note => {
                return (
                <li key={note.id} className='task' style={note.done ? {textDecoration: 'line-through'} : {}}>
                    {note.title} <br />
                    {note.message}
                </li>
                )
            })}
        </ul>
    </div>
  )
}

export default TaskList