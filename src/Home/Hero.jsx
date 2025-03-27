import React from 'react'
import { Container } from 'react-bootstrap'
import '../assets/css/Home.scss'
import CanvasCursor from '../Components/Cursor'

export default function Hero() {
    return (
        <section id="Hero">
            <div className="HeroImg">
                <img src="../images/HeroTop.webp" alt="Hero Background" />
            </div>
            <CanvasCursor />
            <div className="HeroBg"></div>
            <Container>
                <div className="HeroMain">
                    <div className="HeroContent">
                        {/* Plus Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus text-text-ali absolute -left-5 -top-5 h-10 w-10"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>

                        {/* Background Pattern */}
                        <svg
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full fill-slate-500/50 md:fill-slate-500/70 -z-10 opacity-50"
                        >
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
                                    <circle cx="1" cy="0.5" r="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#pattern)" />
                        </svg>

                        {/* Hero Title */}
                        <div className="HeroTitle">
                            <h1>
                                Designing Stories, One Pixel at a <span>Time.</span>
                            </h1>
                            <h1 className="Name">
                                <span> — Viral Shah</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
