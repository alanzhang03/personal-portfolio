import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIsEmailSent(false);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiURL = process.env.REACT_APP_BACKEND_URL;
            const response = await axios.post(`${apiURL}/send-email`, formData);
            console.log(response.data);
            setIsEmailSent(true); 
        } catch (error) {
            console.error('There was an error sending the message:', error);
            setIsEmailSent(false);
        }
    };

    return (
        <div className="contact-container">
            <h1 className="header">Send me a message!</h1>
            <p className="contact-description">Got a question, or just want to say hello? Go ahead!</p>
            {isEmailSent && <p className="success-message">Your message has been sent successfully!</p>}
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="form-group full">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <button type="submit" className="send-button">Shoot →</button>
                </form>
            </div>
        </div>
    );
}