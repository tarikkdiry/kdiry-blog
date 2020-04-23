import React from 'react';
import { useStaticQuery } from 'gatsby';
import Icon from '../../../../assets/icons/social/linkedin.png';
import styles from './index.module.scss';

const LinkedIn = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    linkedIn
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.linkedIn} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default LinkedIn;