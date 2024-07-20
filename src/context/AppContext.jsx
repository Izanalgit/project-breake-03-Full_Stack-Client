import { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvaider = ({children}) => {

    const [projectsData, setProjectsData] = useState("nice");
    const [theme, setTheme] = useState('light');

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

    return (
        <AppContext.Provider value={{
            projectsData,
            theme,
            getProjectsData,
            changeTheme
        }}>
            {children}
        </AppContext.Provider>
    );
}

const useApp = () => useContext(AppContext);

export {AppProvaider, useApp};