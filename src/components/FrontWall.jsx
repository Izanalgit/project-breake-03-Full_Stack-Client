import { useState } from "react";
import gitHubLogo from "../assets/gitHub.png";
import personalImamge from "../assets/personal.png"

const FrontWall = ({props}) => {
    const [title, setTitle] = useState(props.pageBody.title);
    const [lowTitle, setLowTitle] = useState(props.pageBody.lowTitle);
    const [name, setName] = useState(props.personalInfo.name);
    const [gitHub, setGitHub] = useState(props.personalInfo.gitHub);

    const handleGitHub = () => {
        location.href = `${gitHub}`;
    }

    return (
        <div className="frontPage">
            <div className="title">
                <h1>{title}</h1>
                <h2>{lowTitle}</h2>
            </div>
            <div className="personalCard">
                <div>
                    <img src={personalImamge} alt="personal image"/>
                    <h3>{name}</h3>
                </div>
                <img src={gitHubLogo} alt="gitHubLink" onClick={handleGitHub}/>
            </div>
        </div>
    );
}

export default FrontWall;