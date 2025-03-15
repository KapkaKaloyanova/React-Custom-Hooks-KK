import { useState } from 'react';

export default function useForm(initialValues){
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    return {
        values,
        changeHandler,
    }
}