import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="App">
            <Header scrollToAbout={scrollToAbout} />
            <About ref={aboutRef} />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
