import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const scrollInstance = useRef(null);

    useEffect(() => {
        scrollInstance.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 0.5, // Slower = smoother
            lerp: 0.02, // Lower = more easing
        });

        // Handle Mouse Wheel Input (Super Slow)
        const handleWheel = (e) => {
            e.preventDefault();
            scrollInstance.current.scroll.instance.delta.y += e.deltaY * 0.05; // Lower = slower response
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        // Fix resizing issues
        const resizeObserver = new ResizeObserver(() =>
            scrollInstance.current.update()
        );
        resizeObserver.observe(scrollRef.current);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            scrollInstance.current.destroy();
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default SmoothScroll;
