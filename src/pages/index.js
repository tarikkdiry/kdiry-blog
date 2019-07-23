import React from "react";
import Greeting from "../components/Greeting";
import Head from '../components/head';
import Layout from "../layouts/layout";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Greeting></Greeting>
              {/* <h1>Hello.</h1>
            <p>Heyo, reach me <Link to="/contact">here.</Link></p> */}
        </Layout>    
    )
}

export default IndexPage 