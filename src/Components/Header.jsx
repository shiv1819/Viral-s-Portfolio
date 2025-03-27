import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/Home.scss';
import { Container } from 'react-bootstrap';

// import Logo from '../images/Logo2.svg';

const Header = () => {
    const navRef = useRef(null);
    const buttonRef = useRef(null);
    const settingsButtonRef = useRef(null);
    const soundToggleRef = useRef(null);

    const [isSoundEnabled, setIsSoundEnabled] = useState(() => {
        return window.localStorage.getItem('settings:sound') === 'true';
    });

    useEffect(() => {
        // Initialize sound settings on load
        if (window.sound) {
            window.sound.mute(!isSoundEnabled);
        }
    }, [isSoundEnabled]);

    const toggleNavOpen = (event) => {
        event.preventDefault();

        if (navRef.current?.classList.contains('active')) {
            window.playSoundEffect?.('power-down');
        } else {
            window.playSoundEffect?.('power-up');
        }

        navRef.current?.classList.remove('first-run');
        navRef.current?.classList.toggle('active');
    };

    const toggleSettings = () => {
        document.querySelector('.site-settings-panel')?.classList.toggle('site-settings-panel-open');
    };

    const toggleSound = () => {
        const newSoundState = !isSoundEnabled;
        setIsSoundEnabled(newSoundState);
        window.localStorage.setItem('settings:sound', newSoundState);

        if (window.sound) {
            window.sound.mute(!newSoundState);
            const soundImage = soundToggleRef.current?.querySelector('img');
            if (soundImage) {
                soundImage.src = newSoundState
                    ? soundImage.dataset.imageOn
                    : soundImage.dataset.imageOff;
            }
        }
    };

    return (
        <Container>
            {/* Exploding Nav */}
            <header id="Header">
                <div
                    ref={navRef}
                    className="exploding-nav first-run"
                    style={{ '--navCount': 3 }}
                >
                    <button
                        ref={buttonRef}
                        className="exploding-nav-button"
                        onClick={toggleNavOpen}
                    >
                        <img
                            className="face"
                            src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.energy/jason-brains.png"
                            alt="Face"
                        />
                    </button>
                    <nav className="home-page-nav">
                        <a className="home-item" href="/#bio" style={{ '--offset': 1 }}>
                            About Jason
                            <img
                                src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.energy/camera.png"
                                alt="Camera"
                            />
                        </a>
                        <a className="home-item" href="/#teaching" style={{ '--offset': 2 }}>
                            Teaching
                            <img
                                src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.energy/terminal.png"
                                alt="Terminal"
                            />
                        </a>
                        <a className="home-item" href="/#newsletter" style={{ '--offset': 3 }}>
                            Newsletter
                            <img
                                src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/jason.energy/newsletter.png"
                                alt="Newsletter"
                            />
                        </a>
                    </nav>
                </div>

                {/* Logo */}
                <div className="HeaderLogo">
                    <img src="../images/Logo2.svg" alt="Logo" />
                </div>

                {/* Header Content */}
                <div className="HeaderContent">
                    <ul>
                        <li>
                            <a href="#Hero">Home</a>
                        </li>
                        <li>
                            <a href="#About">About</a>
                        </li>
                        <li>
                            <a href="#Services">Graphics</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        </Container>
    );
};

export default Header;
