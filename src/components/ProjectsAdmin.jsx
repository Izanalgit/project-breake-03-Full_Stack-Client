import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useAdmin } from "../context/AdminContext";
import useFetchPOST from "../hooks/useFetchPOST";
import useFetchPUT from "../hooks/useFetchPUT";
import useFetchDELETE from "../hooks/useFetchDELETE";

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
    const [fetchPayloadDel, setFetchPayloadDel] = useState(null);

    const [ projectID , setProjectID ] =useState(null);
    const [errAPI , setErrAPI] = useState (null);
    const [token , setToken] = useState(null);

    const { API , projectsData} = useApp();
    const { throwToken } = useAdmin();

    const API_PROJS = API + '/projects';

    const {
        data: newData,
        status: newStatus,
        errMsg: newErrMsg
    } = useFetchPOST (API_PROJS,fetchPayloadNew);
    const {
        data: putData,
        status: putStatus,
        errMsg: putErrMsg
    } = useFetchPUT (API_PROJS +'/'+ projectID,fetchPayloadPut);
    const {
        data: delData,
        status: delStatus,
        errMsg: delErrMsg
    } = useFetchDELETE (API_PROJS +'/'+ projectID,fetchPayloadDel);

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
            setFetchPayloadNew({
                payload:newProject,
                authToken:token[1]
            })
        }
    },[newProject])

    useEffect(()=>{
        if(putProject){
            setFetchPayloadPut({
                payload:putProject,
                authToken:token[1]
            })
        }
    },[putProject])

    const hadleDelete = (id) =>{
        setProjectID(id);
        setFetchPayloadDel({authToken:token[1]});
    }

    //API responses
    useEffect(()=>{
        if(newErrMsg)
            setErrAPI(newErrMsg);
        if(newData){
            alert("Nuevo proyecto añadido con exito.");
            window.location.reload();
        }  
    },[newStatus,newData,newErrMsg])

    useEffect(()=>{
        if(putErrMsg)
            setErrAPI(putErrMsg);
        if(putData){
            alert("Proyecto modificado con exito.");
            window.location.reload();
        }  
    },[putStatus,putData,putErrMsg])

    useEffect(()=>{
        if(delErrMsg)
            setErrAPI(delErrMsg);
        if(delData){
            alert("Proyecto eliminado con exito.");
            window.location.reload();
        }  
    },[delStatus,delData,delErrMsg])

    //Init auth Token from context
    useEffect(()=>{
        const token = throwToken();
        setToken(token);
    },[])

    return (
        <>  
            <div className="adminTitle">
                <h2 onClick={noForms}>Proyectos subidos :</h2>
                {(!newForm && !putForm) && 
                    <button onClick={()=>addNewProject(true)}>+</button>}
            </div>
            {errAPI &&
                errAPI == Array && 
                    errAPI.map((error, index)=>(
                        <h5 key={`ERROR+${index}`}>{error.msg}</h5>
                    ))
            }
            {newForm && <FormProject props={{getProject:getNewProject}}/>}
            {putForm && <FormProject props={{project,getProject:getPutProject}}/>}
            {(!newForm && !putForm) && 
                <>
                    {(projectsData && !projectsData.message) &&
                        <div className='projectsContainer dataContainer'>{
                        projectsData.map((project)=>(
                            <div  key={project._id}>
                                <Project props={project} />
                                <button onClick={()=>{
                                    setProject(project);
                                    setProjectID(project._id);
                                    addPutProject(true);
                                }}>Modificar</button>
                                <button onClick={()=>{
                                    hadleDelete(project._id);
                                }}>Eliminar</button>                            
                            </div>
                        ))   
                        }</div> 
                    }
                </>
            } 
            
        </>
    );
}

export default ProjectsAdmin;