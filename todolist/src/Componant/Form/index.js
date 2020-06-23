import React, { useState } from 'react'
import './form.scss'



export default function Form(prop){

    const {initialCount=0}=prop;
    const [lists,setList]=useState([]);
    const[assigned,setAssigne]=useState('')
    const[difficulty,setDifficulty]=useState('')
     let [count, setCount] = useState(initialCount);
    const updateList = e => setList(e.target.value);
    const updateAsseigne = e => setAssigne(e.target.value);
    const updateDifficulty = e => setDifficulty(e.target.value);

    const increment = ()=> 
    {
      
        setCount(count + 1);
    };

    const saveList = e => {
        e.preventDefault();
    
        let newList = [...lists, {assigned,difficulty}];
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
              <input name='todo' type='text' onChange={updateList} />
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
              <button type="submit" onClick={setList,increment}>Submit</button>
  
          </form>
          
        </>
      );

}