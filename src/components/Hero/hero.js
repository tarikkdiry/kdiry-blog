import React from 'react';
import heroStyles from '../Hero/hero.module.scss';

const Hero = ({title, date, image, content}) => {
    const defaultImage = "";
    const backgroundImage = image;

    // WORK ON THIS
    if (!image) {
        image = defaultImage;
    }
    
    return (
        <div className={heroStyles.heroContainer}>
            <div className={heroStyles.content}>
                <h1>{title}</h1>
                <p>{date + " | Tarik Kdiry"}</p>
            </div>
        </div>
    )
}

export default Hero