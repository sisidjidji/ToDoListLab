import {useState} from 'react';

function useForm(onSubmit)
{
    const[values,setValues]= useState({});

    const handeleSubmit=e=>{
        e.preventDefault();
        onSubmit(values)
    }

    const handeleChange=e=>{
        const {name,value}=e.target;
        setValues(values=>({
            ...values,
            [name]:value,
        }));
    }

    return[
        handeleSubmit,
        handeleChange,
        values,
    ];


}

export default useForm