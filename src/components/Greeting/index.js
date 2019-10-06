import React from "react";
import '../../styles/global.scss';
import Profile from '../Profile/index';
import greetingStyles from './index.module.scss';

const Greeting = () => {
    return (
        <div className={greetingStyles.container}>
            <div className={greetingStyles.profile}>
                <Profile></Profile>
            </div>
            <h1>Tarik Kdiry</h1>
            <h3>Software Engineer</h3>
        </div>
    )
}

export default Greeting