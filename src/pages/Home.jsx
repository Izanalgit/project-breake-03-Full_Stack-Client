import FrontWall from "../components/FrontWall";
import AboutMe from "../components/AboutMe";
import SoftSkills from "../components/SoftSkill";

import { homeData } from "../data/homeData";

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
      <SoftSkills title={"Front End"} skills={softSkills.frontEnd} />
      <SoftSkills title={"Back End"} skills={softSkills.backEnd} />
      <SoftSkills title={"Lenguajes"} skills={softSkills.lenguages} />
    </>
  )
};

export default Home;