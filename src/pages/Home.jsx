import FrontWall from "../components/FrontWall";
import AboutMe from "../components/AboutMe";
import SoftSkills from "../components/SoftSkill";

import { homeData } from "../data/homeData";

import '../css/FrontWall.css';
import '../css/AboutMe.css';
import '../css/SoftSkills.css';

const Home = () => {

    const {
        personalInfo,
        softSkills,
        pageBody
    } = homeData;

    return (
        <>
            <FrontWall props={{personalInfo,pageBody}} />
            <AboutMe props={{pageBody}} />
            <div className="skillsContainer">
                <SoftSkills title={"Front End"} skills={softSkills.frontEnd} />
                <SoftSkills title={"Back End"} skills={softSkills.backEnd} />
                <SoftSkills title={"Lenguajes"} skills={softSkills.lenguages} />
            </div>
        </>
    )
};

export default Home;