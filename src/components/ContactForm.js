import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Optional CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //         console.log("Form submitted");
        // 
        //         emailjs.send(
        //             'YOUR_SERVICE_ID',
        //             'YOUR_TEMPLATE_ID',
        //             formData,
        //             'YOUR_USER_ID'
        //         ).then((result) => {
        //             alert('Message sent successfully!');
        //             setFormData({ name: '', email: '', message: '' });
        //         }, (error) => {
        //             alert('Failed to send message. Please try again.');
        //         });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <div className="contact-item">
                            <h3>Address</h3>
                            <p> Kanpur</p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p>+91 8368767269</p>
                        </div>
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p>i.ravichandram@gmail.com</p>
                        </div>
                        {/* <div className="contact-item">
                            <h3>Business Hours</h3>
                            <p>Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM</p>
                        </div> */}
                    </div>

                    <div className="contact-form-container">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea"
                                />
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;