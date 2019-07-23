import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/index";
import "../styles/index.scss";
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