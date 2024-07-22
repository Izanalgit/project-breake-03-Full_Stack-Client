import { useState } from "react";

const AboutMe = ({props}) => {
    const [aboutMeText, setAboutMeText] = useState(props.pageBody.aboutMe);

    return (
        <div className="aboutMe">
            <h3>Sobre mi</h3>
            <p>{aboutMeText}</p>
        </div>
    );
}

export default AboutMe;