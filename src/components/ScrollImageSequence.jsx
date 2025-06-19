"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";



export default function ScrollImageSequence({ imageSet }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001,
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            const index = Math.floor(latest * imageSet?.length);
            setCurrentIndex(index);
        });

        return () => unsubscribe();
    }, [smoothProgress]);

    return (
        <div ref={containerRef} className={`w-full h-full relative`}>
            {imageSet?.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`Image ${index}`}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={
                        index <= currentIndex
                            ? { scale: 1, rotate: 0 }
                            : { scale: 0, rotate: -10 }
                    }
                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ zIndex: index }}
                />
            ))}
        </div>
    );
}