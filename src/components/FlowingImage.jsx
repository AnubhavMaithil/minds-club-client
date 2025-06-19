"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import VectorGrey from "@assets/images/vectorGrey.svg";
import VectorBlack from "@assets/images/vectorBlack.svg";

export default function FlowingImage() {
    const containerRef = useRef(null);

    // Scroll tracking relative to container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Start when container enters view
    });

    // Map scroll progress to height (0 to 500px for example)
    const animatedHeight = useTransform(scrollYProgress, [0, 1], [0, 1100]);

    return (
        <div
            ref={containerRef}
            className="hidden md:block left-1/2 -translate-x-1/2 w-1/2 h-full overflow-hidden absolute inset-0 -z-50"
        >
            {/* Background Image */}
            <img
                src={VectorGrey}
                alt="background"
                className="w-full opacity-40"
            />

            {/* Foreground Flowing Mask Image */}
            <motion.div
                className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none"
                style={{ height: animatedHeight }}
                transition={{ type: "tween", ease: "easeOut" }}
            >
                <img
                    src={VectorBlack}
                    alt="flowing mask"
                    className="w-full"
                />
            </motion.div>
        </div>
    );
}