import React from "react";
import greetingStyles from './index.module.scss';

const Greeting = () => {
    return (
        <div className={greetingStyles.container}>
            <div className={greetingStyles.profile}>
                {/* <img src={profileImage} alt="Greeting"></img> */}
            </div>
            <h1>Hi! 👋 I'm Tarik Kdiry</h1>
            <h3>Stay tuned...big things are coming</h3>
        </div>
    )
}

export default Greeting