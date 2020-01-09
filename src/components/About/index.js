import React from "react";
// import '../styles/PageStyles/about.scss';
import aboutStyles from "../About/index.module.scss";
import Bio from "../Bio/index";
import Timeline from "../VerticalTimeline/index";

const About = () => {
    return (
        <div className={aboutStyles.container}>
            <div className={aboutStyles.educationCareer}>
                <Bio></Bio>
            </div>
            <br></br>
            <div className={aboutStyles.timeline}>
                <Timeline></Timeline>
            </div>
            <h6></h6>
        </div>
    )
}

export default About
