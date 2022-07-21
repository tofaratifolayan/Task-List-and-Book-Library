import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Task } from '../models/task'

export default function InputTask(props) {

  const [taskName, setTaskName] = useState('')

  function onFormSubmit(event) {
    event.preventDefault();

    const task = new Task(
      new Date().getTime(),
      taskName,
      false
    )

    props.onTaskCreated(task)

    setTaskName('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group my-3">
          <input 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              //doubly linked
              type="text" 
              className="form-control" 
              placeholder="Task"
          />
          <button 
              className="btn btn-outline-secondary" 
              type="submit">
                  +
          </button>
      </div>
    </form>
  )
}
