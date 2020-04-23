import React from 'react';
import { useStaticQuery } from 'gatsby';
import Icon from '../../../../assets/icons/social/github.png';
import styles from './index.module.scss';

const GitHub = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    gitHub
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.gitHub} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default GitHub;