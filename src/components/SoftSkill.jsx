const SoftSkills = ({title,skills}) => {

    return (
        <div className="softSkills">
            <h3>{title}</h3>
            <p>
                {skills.map((skill,index)=>(
                    <span key={title + index}>{skill} </span>
                ))}
            </p>
        </div>
    );
}

export default SoftSkills;