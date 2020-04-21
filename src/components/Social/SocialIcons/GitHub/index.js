import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import gitHubStyles from './index.module.scss';

const Facebook = () => {
    const link = "http://google.com";

    return (
        <div className={gitHubStyles.container}>
            <div className={gitHubStyles.logo}>
                {/* <FontAwesomeIcon icon={} /> */}
            </div>
        </div>
    )
}

export default Facebook;