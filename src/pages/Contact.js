import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to update state when form fields change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the default form submit action
        try {
            // Retrieve the API URL from the environment variable
            const apiURL = process.env.REACT_APP_BACKEND_URL;
            const response = await axios.post(`${apiURL}/send-email`, formData);
            console.log(response.data);
            // Handle successful form submission here (e.g., show a success message)
        } catch (error) {
            // Handle errors here (e.g., show an error message)
            console.error('There was an error sending the message:', error);
        }
    };

    return (
        <div className="contact-container">
            <h1 className="header">Send me a message!</h1>
            <p className="contact-description">Got a question or proposal, or just want to say hello? Go ahead.</p>
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