import React from 'react';

const Hero = ({title, date}) => {
    return (
        <section class="hero is-success is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {title}
                    </h1>
                    <h2 class="subtitle">
                        {date}
                    </h2>
                </div>
            </div>
        </section>
        // <div className={heroStyles.heroContainer}>
        //     <p>Test</p>
        // </div>
    )
}

export default Hero