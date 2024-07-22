const AboutMe = ({props}) => {

    return (
        <div className="aboutMe">
            <h3>Sobre mi</h3>
            <p>{props.pageBody.aboutMe}</p>
        </div>
    );
}

export default AboutMe;