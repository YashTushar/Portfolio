import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container contact-container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Get In Touch</h2>
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-links">
                        <a href="mailto:yash.singhal1112@gmail.com" className="contact-item">
                            <FaEnvelope className="icon" />
                            <span>yash.singhal1112@gmail.com</span>
                        </a>
                        <a href="tel:9560015691" className="contact-item">
                            <FaPhone className="icon" />
                            <span>+91 95600 15691</span>
                        </a>
                        <a href="https://www.linkedin.com/in/yash-singhal-72a216237" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaLinkedin className="icon" />
                            <span>LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com/YashTushar" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <FaGithub className="icon" />
                            <span>GitHub Profile</span>
                        </a>
                    </div>
                </motion.div>

                <motion.form
                    className="glass-card contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn-primary">Send Message</button>
                </motion.form>
            </div>

            <footer style={{ textAlign: 'center', marginTop: '5rem', color: 'var(--text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} Yash Singhal. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
