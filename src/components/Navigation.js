import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from './AppBar.module.css'

export default function Navigation() {

    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    return (
        <nav>
            <NavLink to='/' className={styles.link} >
                Home
        </NavLink>

            {isAuthenticated && (
                <NavLink to='/phonebook' className={styles.link} >
                    Phonebook
                </NavLink>
            )}
        </nav>
    )
}
