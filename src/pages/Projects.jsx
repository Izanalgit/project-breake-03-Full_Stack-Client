import { useApp } from "../context/AppContext";
import Project from "../components/Project";

import '../css/Projects.css';

const Projects = () => {

    const {projectsData} = useApp();

    return (
        <>
            <h2>Proyectos</h2>
            <div className="projectsContainer">
                {!projectsData && <h5>Conectando con la API ...</h5>}
                {(projectsData && !projectsData.message) &&
                    projectsData.map((project,index)=>( 
                        <Project props={project} key={'project' + index}/>
                    ))  
                }
            </div>
        </>
    )
};

export default Projects;