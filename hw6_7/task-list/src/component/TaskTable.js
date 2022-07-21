import React from 'react'

export default function TaskTable(props) {

  function onToggleTaskClicked(task){
    task.complete= !task.complete
    props.onTaskUpdated(task);
  }

  function onTaskRemove(task){
    props.onTaskRemove(task);
  }

  return (
    <table class="table mt-5">
        <thead>
            <tr>
              <th>Task</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            props.tasks.map((task) =>
              <tr key={task.id}>
                <td>{task.name}</td>
                <td><i className={task.complete ? 'bi bi-circle-fill' : 'bi bi-circle'}></i></td>
                <td>
                  <button
                    onClick={(e) => onToggleTaskClicked(task)}
                    className='btn btn-primary btn-sm'>
                    <i className={task.complete ? 'bi bi-toggle-off' : 'bi bi-toggle-on'}></i>                    
                  </button>
                  <button
                    onClick={(e) => onTaskRemove(task)}
                    className='btn btn-primary btn-sm ms-3'>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            )
          }          
        </tbody>
    </table>
  )
}
