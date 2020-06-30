import React, {useEffect } from 'react';
import useForm from'../../hooks/form';
import './form.scss';



export default function Form(props){

let [handelSubmit,handleChange,values]=useForm(saveFromHook);

function saveFromHook(formValues){
  props.addToList({
    ...formValues,completed:false,
  })
}

let name=values.name;
useEffect(()=>{
  document.title=`new list: ${name}`
},[name])

    //const [lists,setList]=useState([]);
    //const [title,setTitle]=useState('');
    //const[assigned,setAssigne]=useState('')
    //const[difficulty,setDifficulty]=useState('')
    //const updateTitle = e => setTitle(e.target.value);
    //const updateAsseigne = e => setAssigne(e.target.value);
    //const updateDifficulty = e => setDifficulty(e.target.value);

    //const count = lists.length  

   // const saveList = e => {
      //   e.preventDefault();
    
      //   let newList = [...lists, {title,assigned,difficulty,completed :false}];
      //   setList(newList);
      //   e.target.reset();
      // };

     
    
         
      //     return {...lists,title,assigned,difficulty,completed :true ,background:"blue" };
      //   });
       
      //   setList(updatedLists);
      // };

      
    return (
        <>
          <form  onSubmit={handelSubmit} >
          
              <h2>Enter Your List</h2>
              <br></br>
              <label>
             Title 
              <input name='title' type='text' onChange={handleChange} />
              </label>
              <br></br>
              <br></br>
              <label>
              Assigned To
              <input name='assigned' type='text' onChange={handleChange} />
              </label>
              <br></br>
              <br></br>
              <label>
              Difficulty
              <input name='Difficulty ' type='text' onChange={handleChange} />
              </label>
              <br></br>
              <button >Submit</button>
  
          </form>
         </>
      );

}