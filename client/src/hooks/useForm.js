import { useState } from 'react';

export default function useForm(initialValues, callBackHandler){
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        callBackHandler(values);

        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
    }
}