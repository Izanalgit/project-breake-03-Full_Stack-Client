import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAdmin } from "../context/AdminContext";
import useFetchPOST from "../hooks/useFetchPOST";
import useFetchPUT from "../hooks/useFetchPUT";

import FormProject from "./forms/FormProject";
import Project from "./Project";

const ProjectsAdmin = () => {
    
    const [ newForm , setNewForm] = useState(false);
    const [ putForm , setPutForm] = useState(false);
    const [ newProject, setNewProject] = useState(null);
    const [ putProject, setPutProject] = useState(null);
    const [ project , setProject] = useState(null);
    const [fetchPayloadNew, setFetchPayloadNew] = useState(null);
    const [fetchPayloadPut, setFetchPayloadPut] = useState(null);
    const [errAPI , setErrAPI] = useState (null);
    const [token , setToken] = useState(null);

    const { API , projectsData} = useApp();
    const { throwToken } = useAdmin();

    const API_PROJS = API + '/projects';

    const {data: newData,status: newStatus,errMsg: newErrMsg} = useFetchPOST (API_PROJS,fetchPayloadNew);
    const {data: putData,status: putStatus,errMsg: putErrMsg} = useFetchPUT (API_PROJS,fetchPayloadPut);

    //Change forms states
    const addNewProject = (state) => {
        setNewForm(state);
    }
    const addPutProject = (state) => {
        setPutForm(state);
    }
    const noForms = () =>{
        addNewProject(false);
        addPutProject(false);
    }

    //Set project data
    const getNewProject = (data) => {
        if(data) setNewProject(data);
    }
    const getPutProject = (data) => {
        if(data) setPutProject(data);
    }

    //Fetch trigers
    useEffect(()=>{
        if(newProject){
            console.log(newProject) //POST a la API (mirar docs para el payload)
        }
    },[newProject])

    useEffect(()=>{
        if(putProject){
            console.log(putProject,project._id) //PUT a la API (mirar docs para el payload)
        }
    },[putProject])

    //Init auth Token from context
    useEffect(()=>{
        const token = throwToken();
        setToken(token);
        if(token)console.log(token[1]) // <- acuerdate del if por si no ha cargado
    },[])

    return (
        <>
            <h2 onClick={noForms}>Proyectos</h2>
            {errAPI && <h5>{errAPI}</h5>}
            {newForm && <FormProject props={{getProject:getNewProject}}/>}
            {putForm && <FormProject props={{project,getProject:getPutProject}}/>}
            {(!newForm && !putForm) && 
                <>
                    <button onClick={()=>addNewProject(true)}>+</button>
                    {projectsData &&
                        projectsData.map((project)=>(
                            <div key={project._id}>
                                <Project props={project} />
                                <button onClick={()=>{
                                    setProject(project);
                                    addPutProject(true);
                                }}>Modificar</button>                            
                            </div>
                        ))    
                    }
                </>
            } 
            
        </>
    );
}

export default ProjectsAdmin;