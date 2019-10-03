import React from "react";
import Header from "../../components/Header/index";
import '../../styles/global.scss';
import blogPostLayoutStyles from './blogPostLayout.module.scss';

const BlogPostLayout = (props) => {
    return (
        // <div className={blogLayoutStyles.container}>
        //     <Header></Header>
        //     <div className={blogLayoutStyles.content}>
        //         {props.children}
        //     </div>
        //     <Footer></Footer>
        // </div>
        <div className={blogPostLayoutStyles.container}>
            <Header></Header>
            <div className={blogPostLayoutStyles.hero}>
                {props.children}
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default BlogPostLayout 