import { useState } from 'react';

export default function useForm(callBackHandler, initialValues){
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value})) // tova raboti samo za standartni inputs (radio,check ... will not work)
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