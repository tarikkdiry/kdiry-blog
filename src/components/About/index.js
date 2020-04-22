import React from "react";
// import '../styles/PageStyles/about.scss';
import aboutStyles from "../About/index.module.scss";
import '../../styles/global.scss';
import Bio from "../Bio/index";
import Timeline from "../VerticalTimeline/index";
import Profile from '../Profile/index';

const About = () => {
    return (
        <div className={aboutStyles.container}>
            <div className={aboutStyles.about}>
                <Bio></Bio>
                <div className={aboutStyles.profile}>
                    <Profile></Profile>
                </div>
            </div>
            <br></br>
            <div className={aboutStyles.timeline}>
                {/* <Timeline></Timeline> */}
            </div>
            <h6></h6>
        </div>
    )
}

export default About
