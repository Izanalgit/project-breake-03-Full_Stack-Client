import { useApp } from "../context/AppContext";

const Projects = () => {

    const {projectsData} = useApp();

    return (
      <>
      <h2>Projects</h2>
      <h3>{projectsData}</h3>
      </>
    )
  };
  
  export default Projects;