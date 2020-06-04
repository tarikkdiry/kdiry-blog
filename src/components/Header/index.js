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
        // <header className={headerStyles.container}>
        //     <nav class="level">
        //         {/* <div className={headerStyles.header}> */}
        //             <Link to="/">
        //                 <img src={logo} className={headerStyles.logo} alt="tk" to="/"></img>
        //             </Link>
        //         {/* </div> */}
        //         <p>
        //             <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
        //         </p>
        //         {/* <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></p> */}
        //     </nav>
        // </header>
        <nav class="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: '#1D2731', padding: 30}}>
            <div class="navbar-brand">
            
            <a href="/">
                <img src={logo} className={headerStyles.logo} style={{height: '40px', width: '50px'}} alt="tk" to="https://tarikkdiry.com"></img>
            </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                {/* <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>

                <a class="navbar-item">
                    Documentation
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More</a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Jobs</a>
                        <a class="navbar-item">Contact</a>
                        <hr class="navbar-divider"/>
                        <a class="navbar-item">Report an issue</a>
                    </div>
                </div>
                </div> */}
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div class="navbar-end">
                    <div class="navbar-item">
                    <h3>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </h3>
                    </div>
                    {/* <div class="navbar-item">
                        <p>
                            <a href="../../documents/tarik_kdiry_resume.pdf" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Resume</a>
                        </p>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Header