import React from "react";
import Profile from '../Profile/index';
import greetingStyles from './index.module.scss';

const Greeting = () => {
    return (
        <div className={greetingStyles.container}>
            <div className={greetingStyles.profile}>
                <Profile></Profile>
            </div>
            <h1>Hi! 👋 I'm Tarik Kdiry</h1>
            <h3>Stay tuned...big things are coming 💻🙏</h3>
        </div>
    )
}

export default Greeting