const SoftSkills = ({title,skills}) => {

    return (
        <div className="softSkills">
            <h3>{title}</h3>
            <div className="typeSkillsContainer">
                {skills.map((skill,index)=>(
                    <p key={title + index}>{skill} </p>
                ))}
            </div>
        </div>
    );
}

export default SoftSkills;