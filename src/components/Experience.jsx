import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-content glass-card">
                            <div className="exp-header">
                                <h3>Software Engineer</h3>
                                <span className="company">Dataflask Pvt.Ltd</span>
                            </div>
                            <div className="exp-date">
                                <FaCalendarAlt /> November 2025 – Present
                            </div>
                            <ul className="exp-details">
                                <li>Building and maintaining the Admin Panel using <strong>React + Vite</strong>, managing store-level Field Agents.</li>
                                <li>Developing backend APIs using <strong>Python FastAPI</strong> and integrating optimized database workflows with PostgreSQL.</li>
                                <li>Contributing to the mobile application built with <strong>React Native</strong> for on-site store verification.</li>
                                <li>Collaborating with clients to gather requirements and deliver product updates.</li>
                                <li>Working on <strong>Git</strong> and <strong>GitLab</strong> for version control and setting up <strong>Docker</strong> for website containerization.</li>
                                <li>Managing production deployments using PM2, Uvicorn, and Nginx.</li>
                            </ul>
                        </div>
                        <div className="timeline-dot"><FaBriefcase /></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
