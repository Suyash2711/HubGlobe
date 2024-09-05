import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container-contact">
                <h2>Contact Us</h2>
                <h1>Why Choose Us?</h1>
                <div className="centered-text-container">
                    <p className="centered-text">We are helping customers cut costs and boost productivity with a flexible and scalable business phone solution that lets you connect anywhere, anytime. Never miss a call again!</p>
                </div>
                <div className="contact-content">
                    <div className="contact-details">
                        <p>Unit Level 11 (A), Main Office Tower, Financial Park Labuan, Jalan Merdeka, 8700 Labuan FT, Malaysia</p>
                        <a href="https://www.google.com/maps/place/Financial+Park+Labuan" target="_blank" rel="noopener noreferrer">Get directions</a>
                    </div>
                    <div className="map-container">
                        <iframe
                            title="Skrit Creations Pte Ltd "
                            src="https://maps.app.goo.gl/XbzkuxQUX8tnYY3u8"
                            width="100%"
                            height="400"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
