import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import FormContact from "../components/forms/FormContact";
import useFetchPOST from "../hooks/useFetchPOST";

import { contactData } from "../data/contactData";
import ErrorsAPI from "../components/ErrorsAPI";

const Contact = () => {

    const [msgToSend, setMsgToSend] = useState(null);
    const [fetchPayload, setFetchPayload] = useState(null);
    const [errAPI , setErrAPI] = useState (null);
    const { API } = useApp();

    const APP_CONTACT = API + "/public/contact";

    const {data,status,errMsg} = useFetchPOST (APP_CONTACT,fetchPayload);

    const getMsgToSend = (data) => {
        if(data) setMsgToSend(data);
    }
    
    useEffect(()=>{
        if(msgToSend)
            setFetchPayload({payload:msgToSend.values})
    },[msgToSend])
    
    useEffect(()=>{
        if(data && !errMsg){
            setErrAPI(null);
            alert("Mensaje enviado con exito!");
        }
        if(errMsg)
            setErrAPI(errMsg);
    },[status,errMsg])
    
    return (
        <>
            <h2>Contactame :</h2>
            <h5>{contactData.message}</h5>
            <ErrorsAPI errAPI={errAPI} />
            <FormContact props={{getMsgToSend}}/>
        </>
    )
};
  
  export default Contact;