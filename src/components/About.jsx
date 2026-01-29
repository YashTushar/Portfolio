import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="glass-card about-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3>Education</h3>
                        <div className="edu-item">
                            <h4>Indian Institute of Information Technology Sonepat</h4>
                            <p className="degree">B.Tech in Computer Science Engineering</p>
                            <p className="year">Dec 2021 – July 2025</p>
                            <p className="gpa">GPA: 8.348</p>
                            <p className="coursework"><strong>Key Coursework:</strong> DSA, OS, DBMS, CN, Software Engineering</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="glass-card about-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3>Achievements</h3>
                        <ul className="achievements-list">
                            <li>
                                <strong>JEE Mains 2021:</strong> Scored 98 percentile, demonstrating strong analytical skills.
                            </li>
                            <li>
                                <strong>LeetCode:</strong> Solved 300+ problems and earned the "100 Days of Coding" badge (2024).
                            </li>
                            <li>
                                <strong>Certifications:</strong> Node.js, Express, MongoDB & More: The Complete Bootcamp (Udemy).
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
