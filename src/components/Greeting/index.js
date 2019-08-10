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
            <h3>Engineer. Traveler. Writer.</h3>
            <h5>Stay tuned...big things are coming 💻🙏</h5>
        </div>
    )
}

export default Greeting