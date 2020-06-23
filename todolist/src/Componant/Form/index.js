import React from 'react'


export default function Form(prop){

    return (
        <>
          <form >
            
             <h2>you have <span>0</span> item in your list</h2>
              <label>
              <input name='' type='text'  />
               Eter Your To Do List 
              </label>
              <label>
              Assigned To
              <input name='Assigned To' type='text'  />
              </label>
              <label>
              <input name='Status' type='radio' value='complete' />
              Complete
              </label>
              <label>
              <input name='Status' type='radio' value='incomplete' />
              Incomplete
              </label>
              <label>
              Difficulty
              <input name='Difficulty ' type='text'  />
              </label>
  
          </form>
        
        </>
      );

}