import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import '../styles/Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages & Core",
            icon: <FaCode />,
            skills: ["C++", "C", "Python", "JavaScript", "HTML", "CSS"],
            color: "var(--neon-cyan)"
        },
        {
            category: "Backend & DB",
            icon: <FaServer />,
            skills: ["Node.js", "FastAPI", "SQL", "MongoDB", "PostgreSQL"],
            color: "var(--neon-purple)"
        },
        {
            category: "Frameworks",
            icon: <FaMobileAlt />,
            skills: ["React", "React Native", "Tailwind CSS", "Bootstrap"],
            color: "var(--neon-magenta)"
        },
        {
            category: "Tools & DevOps",
            icon: <FaTools />,
            skills: ["Git", "Linux", "PM2", "Uvicorn", "Nginx", "Excel"],
            color: "var(--neon-yellow)"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-card skill-card"
                            variants={itemVariants}
                            style={{ '--card-color': category.color }}
                        >
                            <div className="skill-icon" style={{ color: category.color }}>{category.icon}</div>
                            <h3 style={{ color: category.color }}>{category.category}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
