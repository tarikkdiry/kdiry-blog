import React from "react";
import '../styles/global.scss';
import "../styles/index.scss";
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            {/* <Header></Header> */}
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout 