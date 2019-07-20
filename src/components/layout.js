import React from "react";
import "../styles/index.scss";
import Footer from "./Footer/footer";
import Header from "./Header/index";
import layoutStyles from './layout.module.scss';


const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header></Header>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout