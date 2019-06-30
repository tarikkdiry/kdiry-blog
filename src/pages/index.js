import { Link } from "gatsby";
import React from "react";
import Head from '../components/head';
import Layout from "../components/layout";

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <p>Heyo, reach me <Link to="/contact">here.</Link></p>
        </Layout>    
    )

    // return (
    //     <div>
    //         <Header></Header>
    //         <h1>Hello.</h1>
    //         <p>Heyo, reach me <Link to="/contact">here.</Link></p>
    //         <Footer></Footer>
    //     </div>
    // )
}

export default IndexPage 