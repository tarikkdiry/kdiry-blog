import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

// import './header.module.scss'
import headerStyles from './header.module.scss'

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
            <nav>
            <h3>
                <Link className={headerStyles.title} activeClassNAme={headerStyles.activeNavItem} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h3>
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
            </nav>
        </header>
    )
}

export default Header