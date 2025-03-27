import React from 'react';
import Container from 'react-bootstrap/Container';
import '../assets/css/Home.scss';

function DesignaliLayout() {
    return (
        <>
            <section id="Experience">
                <Container>
                    <div className="parent">
                        <div className="div1">
                            <div className="grid-container">
                                <div className="grid-item">
                                    <span>45</span>
                                    <p>Inspirations</p>
                                </div>
                                <div className="grid-item">
                                    <span>62</span>
                                    <p>Assets</p>
                                </div>
                                <div className="grid-item special">
                                    <p>Experience</p>
                                    <h1>10</h1>
                                    <p>Years</p>
                                    <svg aria-hidden="true">
                                        <defs>
                                            <pattern
                                                id="pattern"
                                                width="5"
                                                height="5"
                                                patternUnits="userSpaceOnUse"
                                                patternContentUnits="userSpaceOnUse"
                                                x="0"
                                                y="0"
                                            >
                                                <circle id="pattern-circle" cx="1" cy="0.5" r="0.5" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern)" />
                                    </svg>
                                </div>
                                <div className="grid-item free">
                                    <p>Free</p>
                                    <h1>4K</h1>
                                    <p>Graaadients</p>
                                </div>
                                <div className="grid-item">
                                    <span>76</span>
                                    <p>Asset Likes</p>
                                </div>
                                <div className="grid-item">
                                    <span>2,816</span>
                                    <p>Asset Views</p>
                                </div>
                            </div>
                        </div>
                        <div className="div11">
                            <div className="central-text-container">
                                <div className="text-content">
                                    <h3 className="title">
                                        Ready to Elevate Your Brand? Let's Create Something Amazing!
                                    </h3>
                                    <p className="description">
                                        With over 5 years of experience in graphic design and video editing, I specialize in crafting eye-catching visuals that make a lasting impact. Whether it's social media content, branding, or motion graphics — I’ve got you covered. Let’s bring your vision to life!
                                    </p>
                                </div>
                                <div className="button-group">
                                    <a href="/pricing" className="button primary-button">
                                        👉 Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="div7">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover rounded-md md:rounded-2xl"
                            >
                                <source src="images/Video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </Container>
            </section>

            <div className="quote-container">
                <svg aria-hidden="true" className="quote-pattern">
                    <defs>
                        <pattern
                            id="quotePattern"
                            width="5"
                            height="5"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="1" cy="0.5" r="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#quotePattern)" />
                </svg>

                <div className="quote-content">
                    <p className="intro-text">I believe</p>
                    <div className="quote-text">
                        <div>
                            <span className="quote-bold">"Design should be easy</span>
                            <span className="quote-light"> to</span>
                        </div>
                        <div>
                            <span className="quote-light">understand because simple</span>
                        </div>
                        <div>
                            <span className="quote-bold">ideas are quicker to</span>
                        </div>
                        <span className="quote-bold">grasp..."</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DesignaliLayout;
