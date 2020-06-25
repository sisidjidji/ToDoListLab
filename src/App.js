import React from 'react';
import Header from '../src/Componant/Header';
import Footer from './Componant/Footer';
import Form from './Componant/Form';
import HooksApi from './hooks';

import './App.css';

function App(){
    return (
        <div classeName='wrap'>
        <Header />
        <Form />
        <br></br>
        <br></br>
        <Footer />
     </div>
}                       
                        

     export default App;
