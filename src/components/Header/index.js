import { graphql, Link, useStaticQuery } from "gatsby";
import React from 'react';
import logo from '../../../public/icons/tk_logo_white.png';
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
                <div class="level-left">
                    <div class="level-item">
                        {/* <Link className={headerStyles.title} activeClassNAme={headerStyles.activeNavItem} to="/">
                            {data.site.siteMetadata.title}
                        </Link> */}
                        <div to="/">
                            <img src={logo} className={headerStyles.logo} alt="tk" to="/"></img>
                        </div>
                    </div>
                </div>
            {/* <div class="level-left">
                <Link>
                    <img src="tk_logo.png" alt=""></img>
                </Link>
            </div>    */}
            {/* RIGHT SIDE */}
            <div class="level-right">
                <div class="right-items">
                    <ul className={headerStyles.navList}>
                        <li>
                            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></p>
                        </li>
                        <li>
                            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></p>
                        </li>
                        <li>
                            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></p>
                        </li>
                        <li>
                            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
    )
}

export default Header