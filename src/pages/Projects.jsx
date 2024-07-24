import { useApp } from "../context/AppContext";
import Project from "../components/Project";

const Projects = () => {

    const {projectsData} = useApp();

    return (
        <>
            <h2>Proyectos</h2>
            <h3>{
                projectsData &&
                    projectsData.map((project,index)=>( 
                        <Project props={project} key={'project' + index}/>
                    ))  
            }</h3>
        </>
    )
};

export default Projects;