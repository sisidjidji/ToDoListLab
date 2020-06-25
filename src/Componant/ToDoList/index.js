import React from 'react';


export default function ToDoList(props){
 
  

    if(props.isLoading){
        return (<h2> Loading..</h2>);
    }
    const count = props.list.length;
    return(
        <>
        <h2>You Have <span className="count">{count}</span> Item In Your List</h2>
        <ul>
            {props.list.map((item,index)=>(
            
            <li key={index}> {item.title} (Completed: {item.completed.toString()} )</li>
            //<button  onClick={() => compledList(index)}>completed</button>
    ))}
            
        </ul>
    </>
    )
}
