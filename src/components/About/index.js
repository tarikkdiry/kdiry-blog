import React from "react";
// import '../styles/PageStyles/about.scss';
import aboutStyles from "../About/index.module.scss";
import Bio from "../Bio/index";
import Timeline from "../VerticalTimeline/index";

const About = () => {
    return (
        <div>
            {/* <Head title="Home"/> */}
            <div className={aboutStyles.educationCareer}>
                <Bio></Bio>
                <Timeline></Timeline>
            </div>
            <br></br>
        </div>
    )
}

export default About
