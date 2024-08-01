import { useState } from "react";
import gitHubLogo from "../assets/gitHub.png";
import linkedInLogo from "../assets/linkedin.png";
import personalImamge from "../assets/personal.png"

const FrontWall = ({props}) => {
    const [title, setTitle] = useState(props.pageBody.title);
    const [lowTitle, setLowTitle] = useState(props.pageBody.lowTitle);
    const [name, setName] = useState(props.personalInfo.name);
    const [gitHub, setGitHub] = useState(props.personalInfo.gitHub);
    const [linkedIn, setLinkedIn] = useState(props.personalInfo.linkedIn);

    const handleLogo = (url) => {
        window.open(`${url}`,'_blank');
    }

    return (
        <div className="frontPage">
            <div className="titleMain">
                <h1>{title}</h1>
                <h4>{lowTitle}</h4>
            </div>
            <div className="personalCard">
                <div className="personalImage">
                    <img src={personalImamge} alt="personal image"/>
                    <h3>{name}</h3>
                </div>
                <div className="personalLogos">
                    <img 
                        src={gitHubLogo} 
                        alt="gitHub Link" 
                        onClick={()=>handleLogo(gitHub)}
                        className="logo"
                    />
                    <img 
                        src={linkedInLogo} 
                        alt="linkedIn Link" 
                        onClick={()=>handleLogo(linkedIn)} 
                        className="logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default FrontWall;