import React from "react";
import About from "../components/About";
import Greeting from "../components/Greeting";
import Head from '../components/head';
import Layout from "../layouts/layout";
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Greeting></Greeting>
            <About></About>
            {/* <Footer></Footer> */}
        </Layout>    
    )
}

export default IndexPage 