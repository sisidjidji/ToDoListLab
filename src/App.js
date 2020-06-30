import React from 'react';
import Header from '../src/Componant/Header';
import Footer from './Componant/Footer';
import Form from './Componant/Form';
import ToDoList from './Componant/ToDoList';

import './App.css';
import useFetch from './hooks/fetch';

export default function App(){

    const[isLoading,data]=useFetch( 'https://deltav-todo.azurewebsites.net/api/v1/Todos');


   const addToDoList=(newItem)=>{
       
       
   }
    return (
        <div classeName='wrap'>
        <Header />
        <Form addToList={addToDoList} />
        <br></br>
        <br></br>
        <ToDoList isLoading={isLoading} list={data} />
        <Footer />
     </div>
    )                       
                        
    }
