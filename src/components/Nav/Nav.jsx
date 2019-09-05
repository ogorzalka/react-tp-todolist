import React, { Component } from 'react';
import styles from './Nav.module.scss';
import {Link} from "react-router-dom";

class Nav extends Component {

    // fonction qui gère le rendu
    render() {
        return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/4sfdgdsfg04">Ma 404</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
