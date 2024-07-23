import { useContext, createContext, useState , useEffect } from "react";

const AdminContext = createContext();

const AdminProvaider = ({children}) => {

    const [atuhToken, setAtuhToken] = useState();
    const [user, setUser] = useState();

    //Save Token
    const getAtuhToken = (user,token) => {
        if(token)
            setAtuhToken(token)
        if(user)
            setUser(user)
    }

    //Send Token : [0]user [1]authToken
    const throwToken = () =>{
        if(localStorage.atuhToken)
            return [
                JSON.parse(localStorage.user),
                JSON.parse(localStorage.atuhToken)
            ]
    };

    //Clean Token and localStorage
    const cleanAtuhToken = () => {
        setAtuhToken(null);
        setUser(null);
        localStorage.removeItem("atuhToken");
        localStorage.removeItem("user");
    };

    //Connection client->localStorage
    useEffect(()=>{
        if(atuhToken && !localStorage.atuhToken)
            localStorage.setItem("atuhToken", JSON.stringify(atuhToken));
        if(user && !localStorage.user)
            localStorage.setItem("user", JSON.stringify(user));            
    },[atuhToken])
    
    return (
        <AdminContext.Provider value={{
            throwToken,
            getAtuhToken,
            cleanAtuhToken,
        }}>
            {children}
        </AdminContext.Provider>
    );
}

const useAdmin = () => useContext(AdminContext);

export {AdminProvaider, useAdmin};