import React from 'react';
import Header from '../src/Componant/Header';
import Footer from './Componant/Footer';
import Form from './Componant/Form';
import ToDoList from './Componant/ToDoList';

import './App.css';

export default function App(){
    return (
        <div classeName='wrap'>
        <Header />
        <Form />
        <br></br>
        <br></br>
        <ToDoList/>
        <Footer />
     </div>
    )                       
                        
    }
