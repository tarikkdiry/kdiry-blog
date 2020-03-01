import React from "react";
import Header from "../../components/Header/index";
import blogPostLayoutStyles from './blogPostLayout.module.scss';
import Helmet from 'react-helmet';
import favicon from "../../assets/icons/tk_logo_white.png";

import '../../styles/global.scss';
import "../../styles/index.scss";


const BlogPostLayout = (props) => {
    return (
        <div className={blogPostLayoutStyles.container}>
            <Helmet>
                <link rel="icon" href={favicon}></link>
            </Helmet>
            <Header></Header>
                <div className={blogPostLayoutStyles.hero}>
                    {props.children}
                </div>
        </div>
    )
}

export default BlogPostLayout 