import React from "react";
import Greeting from "../components/Greeting";
import Head from '../components/head';
import Header from '../components/Header';
import Layout from "../layouts/layout";
import About from "../pages/about";
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Header></Header>
            <Greeting></Greeting>
            <About></About>
            {/* <Timeline></Timeline> */}
            {/* <Contact></Contact> */}
            {/* <Footer></Footer> */}
        </Layout>    
    )
}

export default IndexPage 