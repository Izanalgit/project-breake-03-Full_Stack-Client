import { useState } from "react";

const SoftSkills = ({title,skills}) => {
    const [titleSkill, setTitleSkill] = useState(title);
    const [dataSkills, setDataSkills] = useState(skills);

    return (
        <div className="softSkills">
            <h3>{titleSkill}</h3>
            <p>
                {skills.map((skill)=>(
                    <span>{skill} </span>
                ))}
            </p>
        </div>
    );
}

export default SoftSkills;