import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from "./components/ChatBot";

function App() {
    const aboutRef = useRef(null);
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleChatbotClick = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <div className="App">
            <Header scrollToAbout={scrollToAbout} handleChatbotClick={handleChatbotClick} />
            <About ref={aboutRef} />
            <Services />
            <Contact />
            <Footer />
            {isChatbotOpen && <ChatBot />}
        </div>
    );
}

export default App;
