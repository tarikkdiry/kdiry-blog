import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>© 2019, {data.site.siteMetadata.author}. Powered by Gatsby</p>
        </footer>
    )
}

export default Footer