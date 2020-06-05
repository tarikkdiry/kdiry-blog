import React from "react";
import { Link } from 'gatsby';
import SocialRow from '../Social/Row/index';
import greetingStyles from './index.module.scss';
import Resume from '../../assets/documents/tarik_kdiry_resume.pdf';
import '../../styles/global.scss';

const Greeting = () => {
    return (
        <div className={greetingStyles.container}>
            <div className={greetingStyles.info}>
                <p>Hi! I'm</p>
                <h1>Tarik Kdiry.</h1>
                <h3>software engineer. writer. builder for the web.</h3>
                <h4>I am a <a href={Resume} target="_blank" className={greetingStyles.links}>Software Engineer</a> based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                <h4>Let's connect! While you're here, check out my <Link to='/blog' target="_blank" className={greetingStyles.links}>blog!</Link></h4>
            </div>
            <SocialRow></SocialRow>
        </div>
    )
}

export default Greeting;