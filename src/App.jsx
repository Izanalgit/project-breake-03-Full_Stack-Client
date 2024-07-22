import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useApp } from "./context/AppContext";
import useFetchGET from "./hooks/useFetchGET";

const App = () => {

    const {API,getProjectsData} = useApp();

    const API_HEALTH = API +"/public/health";
    const API_DATA = API + "/public/projects";

    const {data:health,status:pingAPI} = useFetchGET(API_HEALTH);
    const {data,status,errMsg} = useFetchGET(API_DATA);

    const sleepApiMsg = "La API esta invernando, puede que algun contenido tarde en cargar...";

    useEffect(()=>{
        if(!health && pingAPI) alert(sleepApiMsg)
    },[pingAPI]);
      
    useEffect(()=>{
        if(status && !errMsg)
            getProjectsData(data.data);
    },[status]);

    return (
        <>
            <AppRoutes />
        </>
    )
};

export default App;