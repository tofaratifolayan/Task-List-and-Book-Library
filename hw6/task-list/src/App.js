import React from 'react'
import InputTask from './component/InputTask'
import TaskTable from './component/TaskTable'

export default function App() {
  return (
    <div className='container'>
      <div className='card p-3 mt-3'>
        <h1 className="text-center">Task List</h1>
        <hr />
        <h3 class="text-center">Our simple task list</h3>
        <InputTask></InputTask>
        <TaskTable></TaskTable>
      </div>
    </div>
  )
}
