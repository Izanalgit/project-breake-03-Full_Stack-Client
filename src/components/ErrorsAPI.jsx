const ErrorsAPI = ({errAPI}) =>{

    if(errAPI && typeof(errAPI) == "string")
        return (<h5>{errAPI}</h5>)

    else if(errAPI)
        return (
            <>
                {               
                    errAPI.map((error, index)=>(
                        <h5 key={`ERROR+${index}`}>{error.msg}</h5>
                    ))
                }
            </>
        )
}

export default ErrorsAPI;