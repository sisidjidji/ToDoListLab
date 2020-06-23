import React from 'react'
import './form.scss'



export default function Form(prop){

    return (
        <>
          <form >
            
              <h2>you have <span>0</span> item in your list</h2>
              <br></br>
              <label>
              Eter Your To Do List 
              <input name='todo' type='text'  />
              </label>
              <br></br>
              <br></br>
              <label>
              Assigned To
              <input name='Assigned To' type='text'  />
              </label>
              <br></br>
              <label>
              <br></br>
              Status:
             <span> Complete <input name='Status' type='radio' value='complete' /></span>
             <span> Incomplete<input name='Status' type='radio' value='incomplete' /></span>
              </label>
              <br></br>
              <br></br>
              <label>
              Difficulty
              <input name='Difficulty ' type='text'  />
              </label>
  
          </form>
        
        </>
      );

}