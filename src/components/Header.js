import React, { useRef } from 'react';
import './Header.css';

const Header = ({ scrollToAbout }) => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Empowering Your Digital Experience</h1>
                <p>Unleashing the potential of technology for your business</p>
                <button className="learn-more-btn" onClick={scrollToAbout}>
                    Learn More
                </button>
            </div>
        </header>
    );
};

export default Header;
