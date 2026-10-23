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

            {/* Download CV Button */}
            <a 
                href="/Ayanthi_Resume.pdf" 
                download="Ayanthi_Resume.pdf"
                className="cvBtn"
            >
                <span className="downloadIcon">⤓</span> Download CV
            </a>

            {/* Mobile Menu Icon */}
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            
            {/* Mobile Nav Menu */}
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link to="/" className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to="/about" className="listItem" onClick={() => setShowMenu(false)}>About Me</Link>
                <Link to="/projects" className="listItem" onClick={() => setShowMenu(false)}>Project</Link>
                <Link to="/contact" className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
                
                {/* Mobile view-er jonno Download CV button */}
                <a 
                    href="/Ayanthi_Resume.pdf" 
                    download="Ayanthi_Resume.pdf"
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Download CV
                </a>
            </div>
        </nav>
    );
}

export default Navbar;