import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "BlogBuster",
            description: "A full-featured blog platform allowing users to view, like, and manage posts with CRUD operations.",
            tags: ["Node.js", "MongoDB", "EJS", "Tailwind CSS"],
            links: {
                github: "https://github.com/YashTushar/Blog-Buster",
                demo: "#"
            },
            color: "var(--neon-purple)"
        },
        {
            title: "Tours & Travel Website",
            description: "Full-stack travel booking system for browsing destinations, booking trips, and managing reservations.",
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            links: {
                github: "https://github.com/YashTushar/Blog-Buster",
                demo: "#"
            },
            color: "var(--neon-green)"
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{ '--project-color': project.color }}
                        >
                            <div className="project-content">
                                <h3 style={{ color: project.color }}>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
