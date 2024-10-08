import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvaider = ({children}) => {

    const [projectsData, setProjectsData] = useState();
    const [logedIn, setLogedIn] = useState(false);
    const API = "https://project-breake-03-full-stack.onrender.com";

    //Projects data
    const getProjectsData = (data) => {
        if(data)
            setProjectsData(data)
    }

    //Loged check
    const getLoged = (status) => setLogedIn(status);

    return (
        <AppContext.Provider value={{
            projectsData,
            logedIn,
            API,
            getProjectsData,
            getLoged
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useApp = () => useContext(AppContext);

export {AppProvaider, useApp};