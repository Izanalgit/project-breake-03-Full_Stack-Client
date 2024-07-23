import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvaider = ({children}) => {

    const [projectsData, setProjectsData] = useState();
    const [logedIn, setLogedIn] = useState(false);
    const [theme, setTheme] = useState('light');
    const API = "http://localhost:8080";

    //Secure localStorage clean
    localStorage.removeItem("atuhToken");
    localStorage.removeItem("user");

    //Projects data
    const getProjectsData = (data) => {
        if(data)
            setProjectsData(data)
    }

    //Style theme
    const changeTheme = () => {
        if(theme == 'light') setTheme('dark');
        if(theme == 'dark') setTheme('light');
    }

    //Loged check
    const getLoged = (status) => setLogedIn(status);

    return (
        <AppContext.Provider value={{
            projectsData,
            logedIn,
            theme,
            API,
            getProjectsData,
            changeTheme,
            getLoged
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useApp = () => useContext(AppContext);

export {AppProvaider, useApp};