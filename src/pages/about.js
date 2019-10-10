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
            <h1>About.</h1>
            <AboutGrid></AboutGrid>
            <div class="container">
                <h2>What do I do?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet lorem ut efficitur pharetra. Suspendisse nisl sapien, tincidunt sed risus sit amet, vulputate tincidunt libero. In congue neque quis sapien faucibus porttitor. Morbi ac tincidunt tortor, vitae sollicitudin massa. Sed ac lacinia nisl. Cras leo eros, convallis ac purus vel, laoreet interdum magna. Cras lacinia at sem a facilisis. Proin mattis mollis risus, et porttitor urna aliquam sed. Mauris malesuada porta hendrerit. Vivamus facilisis neque quis velit lacinia, in cursus tortor bibendum. Donec non scelerisque sem. Nunc in pharetra augue.
                    Sed et dignissim turpis, quis scelerisque lorem. Sed convallis molestie maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu eros vitae risus elementum facilisis sit amet eu justo. Etiam mi neque, vehicula in sem eu, malesuada pulvinar mauris. Quisque vitae rutrum erat. Donec eget justo non ex vehicula pharetra. Nulla varius nulla venenatis ullamcorper fringilla. Duis vel iaculis elit, et sagittis ligula.
                </p>
                <br></br>
                <h2>What about after work?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet lorem ut efficitur pharetra. Suspendisse nisl sapien, tincidunt sed risus sit amet, vulputate tincidunt libero. In congue neque quis sapien faucibus porttitor. Morbi ac tincidunt tortor, vitae sollicitudin massa. Sed ac lacinia nisl. Cras leo eros, convallis ac purus vel, laoreet interdum magna. Cras lacinia at sem a facilisis. Proin mattis mollis risus, et porttitor urna aliquam sed. Mauris malesuada porta hendrerit. Vivamus facilisis neque quis velit lacinia, in cursus tortor bibendum. Donec non scelerisque sem. Nunc in pharetra augue.
                    Sed et dignissim turpis, quis scelerisque lorem. Sed convallis molestie maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu eros vitae risus elementum facilisis sit amet eu justo. Etiam mi neque, vehicula in sem eu, malesuada pulvinar mauris. Quisque vitae rutrum erat. Donec eget justo non ex vehicula pharetra. Nulla varius nulla venenatis ullamcorper fringilla. Duis vel iaculis elit, et sagittis ligula.
                </p>
            </div>
            <br></br>
            <div>
                <center><h2>Education and Career</h2></center>
                <center><h4>See what I've been up to these past few years...</h4></center>
                <Timeline></Timeline>
            </div>
            <br></br>
        </Layout>
    )
}

export default AboutPage 
