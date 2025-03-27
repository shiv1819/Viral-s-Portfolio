import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / height) * 100;
            setScrollPercentage(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-progress-bar-container">
            <div
                className="scroll-progress-bar"
                style={{ width: `${scrollPercentage}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;
