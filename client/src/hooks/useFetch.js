import { useEffect, useState } from 'react';


export default function useFetch(url, defaultState = {}) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setPending(true); // vlizash v pending pri startirane za vseki sluchai ako niakoi e promenil pendinga mejduvremenno
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(res => res.json())
            .then(result => {
               setState(Object.values(result));
            //    setPending(false); // izlizash ot pending, no pri greshka tova se propuska i zatova .catch ili po-dobre .finally -t.e. bez znachenie dali ste success ili fail ste se izpulni setPending(false) pri settled promise
            })
            .finally(() => {
                setPending(false);
            })

        return () => {
            abortController.abort();
        }
    },[url]);
 
    //[pending messages] triabva da gi vurnem
    return [pending, state]
}