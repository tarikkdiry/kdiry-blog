import React from 'react';
import { useStaticQuery } from 'gatsby';
import Icon from '../../../../assets/icons/social/twitter.png';
import styles from './index.module.scss';

const Twitter = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    twitter
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.twitter} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Twitter;