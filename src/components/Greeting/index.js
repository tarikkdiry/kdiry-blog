import React from "react";
import '../../styles/global.scss';
import greetingStyles from './index.module.scss';
import { Link } from 'gatsby';

const Greeting = () => {
    return (
            <div className={greetingStyles.container}>
                <div className={greetingStyles.info}>
                    <p>Hi! I'm</p>
                    <h1>Tarik Kdiry.</h1>
                    <h2>software engineer. writer. wanna-be fashion stylist</h2>
                    <h4>I am a Software Engineer based out of Hoboken, NJ and operating globally from the New York City area.</h4>
                    <h4>Let's connect! While you're here, check out my <a href='https://tarikkdiry.com/blog/' className={greetingStyles.links}>blog!</a></h4>
                    {/* <button class="button is-primary is-inverted is-outlined">Invert Outlined</button> */}
                </div>
            </div>
    )
}

export default Greeting;