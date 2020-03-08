import React from "react";
import Helmet from 'react-helmet';
import favicon from "../assets/icons/tk_logo_white.png";
import Header from "../components/Header/index";
import '../styles/global.scss';
import "../styles/index.scss";
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <link rel="icon" href={favicon}></link>
            </Helmet>
            <Header></Header> 
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <br></br>
        </div>
    )
}

export default Layout 