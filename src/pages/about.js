import React from "react";
import AboutGrid from "../components/AboutGrid/index";
import Head from '../components/head';
import Timeline from "../components/VerticalTimeline/index";
import Layout from "../layouts/layout";
import '../styles/PageStyles/about.scss';
import aboutStyles from "../styles/PageStyles/about.scss";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            {/* <h1>About.</h1> */}
            <AboutGrid></AboutGrid>
            <div class="container">

            </div>
            <br></br>
            <div className={aboutStyles.info}>
                
            </div>
            <div className={aboutStyles.educationCareer}>
                <center><h2>Education and Career</h2></center>
                <Timeline></Timeline>
            </div>
            <br></br>
        </Layout>
    )
}

export default AboutPage 
