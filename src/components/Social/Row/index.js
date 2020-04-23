import React from 'react';
import styles from '../Row/index.module.scss';
import Email from '../Icons/Email';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import LinkedIn from '../Icons/LinkedIn';
import GitHub from '../Icons/GitHub';

const SocialRow = ({name, url}) => {
    return (
        <div className={styles.container}>
            <Email></Email>
            <Facebook></Facebook>
            <Instagram></Instagram>
            <Twitter></Twitter>
            <LinkedIn></LinkedIn>
            <GitHub></GitHub>
        </div>
        
    )
}

export default SocialRow;