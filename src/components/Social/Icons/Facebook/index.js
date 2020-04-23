import React from 'react';
import { useStaticQuery } from 'gatsby';
import Icon from '../../../../assets/icons/social/facebook-f.png';
import styles from './index.module.scss';

const Facebook = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    facebook
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.facebook} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Facebook;