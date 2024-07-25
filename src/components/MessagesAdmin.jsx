import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAdmin } from "../context/AdminContext";
import useFetchPOST from "../hooks/useFetchPOST";
import useFetchDELETE from "../hooks/useFetchDELETE";

import Message from "./Message";

const MessagesAdmin = () => {

    const [fetchPayloadGet, setFetchPayloadGet] = useState(null);
    const [fetchPayloadDel, setFetchPayloadDel] = useState(null);

    const [ messages , setMessages ] = useState(null);
    const [ messageID , setMessageID ] = useState(null);
    const [errAPI , setErrAPI] = useState (null);
    const [token , setToken] = useState(null);

    const { API } = useApp();
    const { throwToken } = useAdmin();

    const API_MESSG = API + '/messages';

    const {
        data: postData,
        status: postStatus,
        errMsg: postErrMsg
    } = useFetchPOST (API_MESSG,fetchPayloadGet);

    const {
        data: delData,
        status: delStatus,
        errMsg: delErrMsg
    } = useFetchDELETE (API_MESSG + '/' + messageID,fetchPayloadDel);

    //Get messages
    useEffect(()=>{
        const token = throwToken();
        setToken(token);
        if(token)setFetchPayloadGet({authToken:token[1]});
    },[])

    //Delete message
    const hadleDelete = (id) =>{
        setMessageID(id);
        setFetchPayloadDel({authToken:token[1]});
    }

    //API Responses
    useEffect(()=>{
        if(postErrMsg)
            setErrAPI(postErrMsg);
        if(postData){
            setMessages(postData.data);
        }  
    },[postStatus,postData,postErrMsg])

    useEffect(()=>{
        if(delErrMsg)
            setErrAPI(delErrMsg);
        if(delData){
            alert("Mensaje eliminado con exito.");
            window.location.reload();
        }  
    },[delStatus,delData,delErrMsg])

    return (
        <>
            <h2>Mensajes recividos :</h2>
            <div className="messagesContainer dataContainer">
                {errAPI && <h5>{errAPI}</h5>}
                {console.log(messages)}
                {(messages && !messages.message) &&
                    messages.map((message)=>(
                        <div key={message._id}>
                            <Message props={{message}} />
                            <button onClick={()=>{
                                hadleDelete(message._id);
                            }
                            }>Eliminar</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default MessagesAdmin;