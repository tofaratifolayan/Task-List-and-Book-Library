import React, {useState} from 'react'
import InputTask from './component/InputTask'
import TaskTable from './component/TaskTable'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'



export default function App() {

  const [tasks, setTasks] = useState([]);

  function onTaskCreated(task) {
    setTasks(tasks.append(task))
  }

  function onTaskUpdated(task) {
    const newTasks = tasks.map((t) => {return t.id === task.id ? task : t})
    setTasks(newTasks)
  }

  function onTaskRemove(task){
    const newTasks = tasks.filter((t) => {return t.id !== task.id})
    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <div className='card p-3 mt-3'>
        <h1 className="text-center">Task List</h1>
        <hr />
        <h3 class="text-center">Our simple task list</h3>
        <InputTask
          onTaskCreated={onTaskCreated}
        ></InputTask>
        <TaskTable 
          tasks={tasks}
          onTaskUpdated={onTaskUpdated}
          onTaskemoved={onTaskRemove}
        ></TaskTable>
      </div>
    </div>
  )
}
