import React from 'react';
import heroStyles from '../Hero/hero.module.scss';

const Hero = ({title, date, forward, content}) => {
    
    return (
        <div className={heroStyles.heroContainer}>
            <div className={heroStyles.content}>
                <h1>{title}</h1>
                <h3>{date + " | Tarik Kdiry"}</h3>
                <p>{forward}</p>
            </div>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Hero