import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useApp } from "./context/AppContext";
import useFetchGET from "./hooks/useFetchGET";

const API_DATA_URL = "http://localhost:8080/public/projects";

const App = () => {

    const {getProjectsData} = useApp();
    const {data,status,errMsg} = useFetchGET(API_DATA_URL);  

    useEffect(()=>{
        
        if(status && !errMsg)
            getProjectsData(data.data);

    },[status])

    return (
        <>
            <AppRoutes />
        </>
    )
};

export default App;