import { Link } from 'gatsby';
import React from "react";
import '../../styles/global.scss';
import greetingStyles from './index.module.scss';

const Greeting = () => {
    return (
            <div className={greetingStyles.container}>
                <div className={greetingStyles.info}>
                    <p>Hi! I'm</p>
                    <h1>Tarik Kdiry.</h1>
                    <h2>software engineer. writer. builder for the web.</h2> {/* wanna-be fashtion stylist */}
                    <h4>I am a Software Engineer based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                    <h4>Let's connect! While you're here, check out my <Link to='/blog' target="_blank" className={greetingStyles.links}>blog!</Link></h4>
                    {/* <Social></Social> */}
                </div>
                {/* <SocialMedia></SocialMedia> */}
            </div>
    )
}

export default Greeting;