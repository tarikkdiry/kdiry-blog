import React from "react";
import AboutGrid from "../components/AboutGrid/index";
import Head from '../components/head';
import Timeline from "../components/VerticalTimeline/index";
import Layout from "../layouts/layout";
import '../styles/PageStyles/about.scss';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            {/* <h1>About.</h1> */}
            <AboutGrid></AboutGrid>
            <div class="container">

            </div>
            <br></br>
            <div>
                <h3>Hey there, I am Tarik Kdiry</h3>
                <h3>I am a Software Engineer based out of the New York City area.</h3>
                <h3>Here are some of the tools I use:</h3>
                {/* TOOLS COMPONENT */}
                <h3>When I'm not behind the screen, I love to travel, watch movies, and of course, play music. Check out where I've been!</h3>
                {/* Maybe a cool map or something? */}
                <h3>Here's what I'm listening to!</h3>
                {/* Spotify component? */}
            </div>
            <div>
                <center><h2>Education and Career</h2></center>
                <Timeline></Timeline>
            </div>
            <br></br>
        </Layout>
    )
}

export default AboutPage 
