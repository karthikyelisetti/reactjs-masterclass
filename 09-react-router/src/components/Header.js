import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt='Routermate Logo' />
        <span>Routermate</span>
      </Link>
      <nav className='navigation'>
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/Products" className="link">Products</NavLink>
        <NavLink to="/Contact" className="link">Contact</NavLink>
      </nav>
    </header>
  )
}
