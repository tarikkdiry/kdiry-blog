import { Link } from "gatsby";
import React from "react";
import Head from '../components/head';
import Layout from "../components/layout";
// import "./index.scss";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <p>Heyo, reach me <Link to="/contact">here.</Link></p>
        </Layout>    
    )
}

export default IndexPage 