import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import twitterStyles from './index.module.scss';

const Facebook = () => {
    const link = "http://google.com";

    return (
        <div className={twitterStyles.container}>
            <div className={twitterStyles.logo}>
                {/* <FontAwesomeIcon icon={} /> */}
            </div>
        </div>
    )
}

export default Facebook;