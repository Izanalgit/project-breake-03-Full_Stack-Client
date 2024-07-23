import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import FormContact from "../components/forms/FormContact";
import useFetchPOST from "../hooks/useFetchPOST";

const Contact = () => {

    const [msgToSend, setMsgToSend] = useState(null);
    const [fetchPayload, setFetchPayload] = useState(null);
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
        if(data && !errMsg)
            alert("Mensaje enviado con exito!");
    },[status])
    
    return (
        <>
            <h2>Contactame :</h2>
            <FormContact props={{getMsgToSend}}/>
        </>
    )
};
  
  export default Contact;