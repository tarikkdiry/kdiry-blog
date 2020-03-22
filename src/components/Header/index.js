import { graphql, Link, useStaticQuery } from "gatsby";
import React from 'react';
import logo from '../../assets/icons/tk_logo_white.png';
import headerStyles from './index.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={headerStyles.container}>
            <nav class="level">
                <div className={headerStyles.header}>
                    <Link to="/">
                        <img src={logo} className={headerStyles.logo} alt="tk" to="/"></img>
                    </Link>
                </div>
                <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></p>
            </nav>
        </header>
    )
}

export default Header