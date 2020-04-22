import React from 'react';
import { Link } from 'gatsby';
import Icon from '../../../../assets/icons/social/instagram.png';
import facebookStyles from './index.module.scss';

const Facebook = () => {
    const link = "http://google.com";

    return (
        <div className={facebookStyles.container}>
            <a href="http://google.com">
                <img src={Icon} className={facebookStyles.logo}></img>
            </a>
        </div>
    )
}

export default Facebook;