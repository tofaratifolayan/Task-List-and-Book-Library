import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function InputTask() {
  return (
    <div className="input-group my-3">
        <input 
            type="text" 
            class="form-control" 
            id="input" 
            placeholder="Task"
        />
        <button 
            className="btn btn-outline-secondary" 
            type="button" 
            id="button">
                +
        </button>
    </div>
  )
}
