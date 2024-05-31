import React from 'react';
import './Header.css';
import chatIcon from  '../Assets/ChatBotIcon.png'

const Header = ({ scrollToAbout, handleChatbotClick }) => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Empowering Your Digital Experience</h1>
                <p>Unleashing the potential of technology for your business</p>
                <button className="learn-more-btn" onClick={scrollToAbout}>
                    Learn More
                </button>
                <div className="chatbot-launcher" onClick={handleChatbotClick}>
                    <img src={chatIcon} alt="Chatbot" />
                </div>
            </div>
        </header>
    );
};

export default Header;
