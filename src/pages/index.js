import React from "react";
import About from "../components/About";
import Greeting from "../components/Greeting";
import Head from "../components/head";
import Layout from "../layouts/layout";
import Timeline from "../components/VerticalTimeline";
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Greeting></Greeting>
            <About></About>
            {/* <Timeline></Timeline> */}
        </Layout>    
    )
}

export default IndexPage 