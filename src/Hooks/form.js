import {useState} from 'react';

function useForm(onSubmit)
{
    const[values,setValues]= useState({});

    const handelSubmit=e=>{
        e.preventDefault();
        onSubmit(values)
    }

    const handelChange=e=>{
        const {name,value}=e.target;
        setValues(values=>({
            ...values,
            [name]:value,
        }));
    }

    return[
        handelSubmit,
        handelChange,
        values,
    ];


}

export default useForm