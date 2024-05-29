import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container-contact">
                <h2>Contact Us</h2>
                <h1>Why to Choose Us?</h1>
                <p>We are helping customers cut costs and boost productivity with a flexible and scalable business phone solution that lets you connect anywhere, anytime. Never miss a call again!</p>
                <div className="contact-details">
                    <p>Unit Level 11 (A), Main Office Tower, Financial Park Labuan, Jalan Merdeka, 8700 Labuan FT, Malaysia</p>
                    <a href="https://www.google.com/maps/place/Financial+Park+Labuan" target="_blank" rel="noopener noreferrer">Get directions</a>
                </div>
                <div className="map-container">
                    <iframe
                        title="Financial Park Labuan"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3308411916365!2d115.2408797141473!3d5.27600373729968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3223bd01e15d58c1%3A0x4f2b2e79e8d7886e!2sFinancial%20Park%20Labuan!5e0!3m2!1sen!2smy!4v1688038212345!5m2!1sen!2smy"
                        width="150%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
