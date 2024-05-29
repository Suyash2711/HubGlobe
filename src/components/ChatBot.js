import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ChatBot.css';

const ChatBot = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        message: ''
    });

    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_ovthz4e', // Replace with your service ID
            'template_b8ch4ro', // Replace with your template ID
            {
                from_name: formData.from_name,
                to_name: 'HubGlobe Query', // Replace with your name or a variable
                message: formData.message,
                reply_to: formData.email
            },
            'b-h-QV_ju5VIhBMRo' // Replace with your user ID
        )
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send the message, please try again later.');
            });

        setFormData({
            from_name: '',
            email: '',
            message: ''
        });
    };

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={`chatbot-container ${isVisible ? 'visible' : ''}`}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>How can we help you?</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;
