import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
};

const InfiniteTypewriter = ({ words, typeSpeed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (index >= words.length) {
            // Wrap around safely? usually strictly handled by logic below
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            // Finished typing word, wait then reverse
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            // Finished deleting, move to next word
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, pauseTime]);

    return (
        <span>
            {words[index].substring(0, subIndex)}
            <span style={{ opacity: blink ? 1 : 0, fontWeight: 100, color: 'var(--neon-cyan)' }}>|</span>
        </span>
    );
};

const Hero = () => {
    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "React Native Developer",
        "Problem Solver"
    ];

    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h4>Hello, I'm</h4>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Yash Singhal
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{ minHeight: '1.2em' }} // Prevent layout shift
                    >
                        <InfiniteTypewriter words={roles} />
                    </motion.h2>
                    <p>
                        Building <span>scalable web applications</span> and solving complex problems with <span>modern technologies</span>.
                    </p>
                    <div className="hero-btns">
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            <button className="btn-primary">View My Work</button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <button className="btn-secondary">Contact Me</button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="img-box">
                        <div className="avatar-placeholder">YS</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
