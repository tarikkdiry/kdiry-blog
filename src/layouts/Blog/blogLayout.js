import React from "react";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/index";
import Hero from "../../components/Hero/index";
import Layout from "../layout";
import blogLayoutStyles from './blogLayout.module.scss';

const BlogLayout = (props) => {
    return (
        <Layout>
        <div>
            <Header></Header>
            <div className={blogLayoutStyles.container}>
                <Hero></Hero>
                <div className={blogLayoutStyles.content}>
                    {props.children}
                </div>
                <Footer></Footer>
            </div>
        </div>
        </Layout>
    )
}

export default BlogLayout 