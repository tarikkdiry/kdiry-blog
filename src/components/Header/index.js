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
        <header className={headerStyles.header}>
            {/* LEFT SIDE */}
            <nav class="level">
                <div to="/">
                    <Link to="/">
                        <img src={logo} className={headerStyles.logo} alt="tk" to="/"></img>
                    </Link>
                </div>
            {/* RIGHT SIDE */}
                <div class="right-items">
                    <ul>
                        <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></p>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header