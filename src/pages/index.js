import React from "react";
import Greeting from "../components/Greeting";
import Head from '../components/head';
import Header from '../components/Header';
import Layout from "../layouts/layout";
import About from "../components/About";
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Greeting></Greeting>
            <About></About>
        </Layout>    
    )
}

export default IndexPage 