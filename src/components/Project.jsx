const Project = ({props}) => {

    const handleClick = () => {
        if(props.link)
            window.open(`${props.link}`,'_blank');
    }

    return (
        <div className="project glow" onClick={handleClick}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Project;