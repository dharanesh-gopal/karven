"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorDrone() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Precise spring movement
    const springX = useSpring(0, { stiffness: 400, damping: 30 });
    const springY = useSpring(0, { stiffness: 400, damping: 30 });

    useEffect(() => {
        springX.set(mousePos.x);
        springY.set(mousePos.y);
    }, [mousePos.x, mousePos.y, springX, springY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999]"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <div className="relative flex items-center justify-center w-16 h-16">
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-red-500/30 blur-2xl rounded-full scale-150" />
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110" />

                {/* The Drone Icon */}
                <motion.div
                    animate={{
                        rotate: [2, -2, 2],
                        y: [-1, 1, -1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-5xl drop-shadow-2xl z-10"
                >
                    🛸
                </motion.div>

            </div>
        </motion.div>
    );
}
