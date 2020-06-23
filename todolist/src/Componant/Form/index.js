import React, { useState } from 'react'
import './form.scss'



export default function Form(){

    const [lists,setList]=useState([]);
    const [title,setTitle]=useState('');
    const[assigned,setAssigne]=useState('')
    const[difficulty,setDifficulty]=useState('')
    const updateTitle = e => setTitle(e.target.value);
    const updateAsseigne = e => setAssigne(e.target.value);
    const updateDifficulty = e => setDifficulty(e.target.value);

    const count = lists.length  

    const saveList = e => {
        e.preventDefault();
    
        let newList = [...lists, {title,assigned,difficulty}];
        setList(newList);
        e.target.reset();
      };


    return (
        <>
          <form  onSubmit={saveList} >
            
    <h2>you have <span className="count">{count}</span> item in your list</h2>
              <br></br>
              <label>
              Enter Your List 
              <input name='todo' type='text' onChange={updateTitle} />
              </label>
              <br></br>
              <br></br>
              <label>
              Assigned To
              <input name='Assigned To' type='text' onChange={updateAsseigne} />
              </label>
              <br></br>
              <br></br>
              <label>
              Difficulty
              <input name='Difficulty ' type='text' onChange={updateDifficulty} />
              </label>
              <br></br>
              <button >Submit</button>
  
          </form>
          <ul>
          {lists.map((list, index) => (
           <li key={index}>
             {list.title}
           </li>
          ))}
         </ul>
        </>
      );

}