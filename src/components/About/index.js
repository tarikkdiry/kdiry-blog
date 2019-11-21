import React from "react";
// import AboutGrid from "../components/AboutGrid/index";
import Head from '../Header/index';
import Timeline from "../VerticalTimeline/index";
import Layout from "../../layouts/layout";
// import '../styles/PageStyles/about.scss';
import aboutStyles from "../About/index.module.scss";

const About = () => {
    return (
        <div>
            {/* <Head title="Home"/> */}
            <div className={aboutStyles.educationCareer}>
                <center><h2>Education and Career</h2></center>
                <Timeline></Timeline>
            </div>
            <br></br>
        </div>
    )
}

export default About
