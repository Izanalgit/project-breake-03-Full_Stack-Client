import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAdmin } from "../context/AdminContext";
import useFetchPOST from "../hooks/useFetchPOST";


const LogOut = () => {
    const [token, setToken] = useState(null);
    const [fetchPayload, setFetchPayload] = useState(null);
    const [errAPI , setErrAPI] = useState (null);

    const {API, getLoged} = useApp();
    const {cleanAtuhToken , throwToken} = useAdmin();

    const API_LOGOUT = API + '/user/logout';

    const {data,status,errMsg} = useFetchPOST (API_LOGOUT,fetchPayload);

    const handleClick = () => {
        setFetchPayload({
            payload: {name: token[0]},
            authToken: token[1]
        })
    }

    //Init auth Token from context
    useEffect(()=>{
        const token = throwToken();
        setToken(token);
    },[])

    //Clean token
    useEffect(()=>{
        if(errMsg)
            setErrAPI(errMsg);
        if(data && !errMsg){
            cleanAtuhToken();
            getLoged(false);
        }    
    },[status,data,errMsg])


    return (
        <>
            {errAPI && <h5>{errAPI}</h5>}
            {/* <Link to={"/"}> */}
                <button onClick={handleClick}>LogOut</button>
            {/* </Link> */}
        </>
    );
}

export default LogOut;