import React from "react";
import '../../styles/global.scss';
// import Profile from '../Profile/index';
import greetingStyles from './index.module.scss';

const Greeting = () => {
    return (
            <div className={greetingStyles.container}>
                {/* <div className={greetingStyles.profile}>
                    <Profile></Profile>
                </div> */}
                <div className={greetingStyles.info}>
                    <p>Great to meet you, I'm</p>
                    <h1>Tarik Kdiry.</h1>
                    <h2>software engineer. former engineering student. first sword of Braavos.</h2>
                    <h4>I am a Software Engineer based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                    {/* <button class="button is-primary is-inverted is-outlined">Invert Outlined</button> */}
                </div>
            </div>
    )
}

export default Greeting;