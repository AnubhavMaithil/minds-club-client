import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork2.png?updatedAt=1747683885835",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork1.png?updatedAt=1747683885816",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
];

const positions = [
    { top: "15vh", left: "20vw" },
    { top: "40vh", left: "60vw" },
    { top: "70vh", left: "35vw" },
    { top: "55vh", left: "10vw" },
    { top: "25vh", left: "75vw" },
    { top: "10vh", left: "50vw" },
    { top: "60vh", left: "80vw" },
    { top: "30vh", left: "40vw" },
];

const ScrollEffect = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 60%", "end end"],
    });

    return (
        <div
            ref={containerRef}
            style={{ minHeight: "300vh", position: "relative" }}
        >
            {/* Sticky Text */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "none",
                    zIndex: 20,
                }}
            >
                <h1
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        mixBlendMode: "difference",
                    }}
                    className="text-black w-full md:w-1/3 text-center pointer-events-none"
                >
                    Crafted by Visionaries We Believe In
                </h1>
            </div>

            {/* Animated Images */}
            {images.map((src, i) => {
                const delayStart = i * 0.08;
                const start = 0 + delayStart;
                const mid = 0.2 + delayStart;
                const end = 0.4 + delayStart;

                const imageScale = useTransform(scrollYProgress, [start, mid, end], [0, 2, 5]);
                const imageOpacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
                const blur = useTransform(scrollYProgress, [mid, end], ["0px", "10px"]);

                return (
                    <motion.img
                        key={i}
                        src={src}
                        style={{
                            position: "absolute",
                            top: positions[i].top,
                            left: positions[i].left,
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            borderRadius: "12px",
                            scale: imageScale,
                            opacity: imageOpacity,
                            filter: blur,
                            zIndex: 10,
                            pointerEvents: "none",
                        }}
                        transition={{
                            ease: [0.25, 1, 0.5, 1],
                            duration: 1,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ScrollEffect;