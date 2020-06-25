import React from 'react';
import useFetch from '../../hooks/fetch';

export default function ToDoList(prop){
    const[isLoading,data]=useFetch( 'https://deltav-todo.azurewebsites.net/api/v1/Todos');
    if(isLoading){
        return (<h2> Loading..</h2>);
    }

    return(
        <>
        <h2>You Have <span className="count">0</span> Item In Your List</h2>
        <ul>
            {data.map((item,index)=>(
            
            <li key={index}> {item.title} (Completed: {item.completed.toString()} )</li>
            //<button  onClick={() => compledList(index)}>completed</button>
    ))}
            
        </ul>
    </>
    )
}
