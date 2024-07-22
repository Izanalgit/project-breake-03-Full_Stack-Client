import { useState , useEffect } from "react";
import axios from "axios";

const useFetchPUT = (url,payload) => {
    
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(false);
    const [errMsg, setErrMsg] = useState(null);
   
    useEffect(()=>{

        axios.put(url,payload)
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                if (error.response) {
                    setErrMsg(`Error estado : ${error.response.status}`);
                } else if (error.request) {
                    setErrMsg(`No responde`);
                    console.log(error.request);
                } else {
                    setErrMsg(`Error desconocido`);
                    console.log(error.message);
                }
            })
            .finally(() => {
                setStatus(true);
            })

    },[url]);


    return {data,status,errMsg};

}

export default useFetchPUT;