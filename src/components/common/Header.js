import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './header.module.css';

const Header = () => (
    <nav>
        <NavLink to='/' className={css.navLink} activeClassName={css.activeStyle} exact>Home</NavLink> |
        <NavLink to='/tictactoe' className={css.navLink} activeClassName={css.activeStyle}>Tic-Tac_Toe</NavLink> |
        <NavLink to='/about' className={css.navLink} activeClassName={css.activeStyle}>About</NavLink>
    </nav>
);

export default Header;
