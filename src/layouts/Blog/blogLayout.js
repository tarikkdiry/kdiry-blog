import React from "react";
import Hero from "../../components/Hero/index";
import Footer from "../components/Footer/footer";
import "../styles/index.scss";
import blogLayoutStyles from './blogLayoutStyles.module.scss';

const BlogLayout = (props) => {
    return (
        <div className={blogLayoutStyles.container}>
            <Hero></Hero>
            <div className={blogLayoutStyles.content}>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default BlogLayout 