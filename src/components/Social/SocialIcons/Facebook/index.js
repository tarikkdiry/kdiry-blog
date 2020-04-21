import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import facebookStyles from './index.module.scss';

const Facebook = () => {
    const link = "http://google.com";

    return (
        <div className={facebookStyles.container}>
            <div className={facebookStyles.logo}>
                {/* <FontAwesomeIcon icon={} /> */}
            </div>
        </div>
    )
}

export default Facebook;