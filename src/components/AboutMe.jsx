const AboutMe = ({props}) => {

    return (
        <div className="aboutMe">
            <h2>Sobre mi</h2>
            <p>{props.pageBody.aboutMe}</p>
        </div>
    );
}

export default AboutMe;