import React, { useState } from 'react';
import './navbar.css';
import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom'; 
import menu from '../../asset/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo"/>
            </Link>
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">Home</Link>
                <Link to="/about" className="desktopMenuListItem">About Me</Link>
                <Link to="/projects" className="desktopMenuListItem">Project</Link>
                <Link to="/contact" className="desktopMenuListItem">Contact</Link>
            </div>
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link to="/" className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to="/about" className="listItem" onClick={() => setShowMenu(false)}>About Me</Link>
                <Link to="/projects" className="listItem" onClick={() => setShowMenu(false)}>Project</Link>
                <Link to="/contact" className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;