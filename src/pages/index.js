import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
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