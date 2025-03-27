import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from './Particles';
import { FaGlobe, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <section id='Footer'>
            <Container>
                <div className="FooterBox">
                    <svg aria-hidden="true" class="quote-pattern"><defs><pattern id="quotePattern" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="0.5" r="0.5"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#quotePattern)"></rect></svg>
                    <div className="connect-section">
                        <Particles />
                        <div className="left">
                            <h2>Let’s connect</h2>
                            <p>
                                We’re here to help and answer any question you might have,
                                <br /> We look forward to hearing from you.
                            </p>
                        </div>
                        <div className="right">
                            <div className="card">
                                <div className="icon-wrapper">
                                    <FaGlobe className="icon" />
                                </div>
                                <h3>Join our community</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#">Join our Discord →</a>
                            </div>
                            <div className="card">
                                <div className="icon-wrapper">
                                    <FaTwitter className="icon" />
                                </div>
                                <h3>Follow us on Twitter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#">Send us DMs →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
