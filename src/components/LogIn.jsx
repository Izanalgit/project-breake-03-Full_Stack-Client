import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAdmin } from '../context/AdminContext';
import useFetchPOST from '../hooks/useFetchPOST';
import FormLogIn from "./forms/FormLogIn";

const LogIn = () => {

    const [fetchPayload, setFetchPayload] = useState(null);
    const [credentials, setCredentials] = useState(null);
    const [errAPI , setErrAPI] = useState (null);

    const { getAtuhToken , throwToken} = useAdmin();
    const { API , getLoged } = useApp();

    const API_LOGIN = API + '/user/login';

    const {data,status,errMsg} = useFetchPOST (API_LOGIN,fetchPayload);

    const getCredentials = (data) => {
        if(data) setCredentials(data);
    }

    //Set payloand to POST
    useEffect(()=>{
        if(credentials)
            setFetchPayload({payload:credentials})
    },[credentials])
    
    //Save token
    useEffect(()=>{
        if(errMsg)
            setErrAPI(errMsg);
        if(data)
            if(data.data.authToken){
                getAtuhToken(data.data.user,data.data.authToken);
                getLoged(true);
            }    
    },[status,data,errMsg])

    //Init auth Token from context
    useEffect(()=>{
        const token = throwToken();
        if(token)getLoged(true);
    },[])

    return(
        <>
            {errAPI && 
                errAPI.map((error, index)=>(
                    <h5 key={`ERROR+${index}`}>{error.msg}</h5>
                ))
            }
            <FormLogIn props={{getCredentials}} />
        </>
    );

}

export default LogIn;