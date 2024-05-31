import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      {/* Link is used in place of <a /> tag in react to navigate to a page */}
      <Link to="/" className="logo">
        <img src={Logo} alt='Routermate Logo' />
        <span>Routermate</span>
      </Link>
      <nav className='navigation'>
        {/* "NavLink" is used in place of <a /> tag in react to navigate to a page
            "NavLink" is also used to highlight the active page
            "end" is used to remove the default higlighting */}
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/Products" className="link">Products</NavLink>
        <NavLink to="/Contact" className="link">Contact</NavLink>
      </nav>
    </header>
  )
}
