const Project = ({props}) => {

    const handleClick = () => {
        location.href = `${props.link}`;
    }

    return (
        <div className="project glow" onClick={handleClick}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Project;