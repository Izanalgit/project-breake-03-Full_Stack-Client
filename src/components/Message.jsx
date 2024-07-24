const Message = ({props}) => {

    return (
        <div className="message" >
            <h3>{props.message.contact}</h3>
            <p>{props.message.message}</p>
            <p>Recivido : {props.message.createdAt}</p>
            
        </div>
    );
}

export default Message;