import { useRef } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper"
import { motion, useInView } from "framer-motion";
import { slideUp } from "@/utils/animation";


const ContentSectionHomepage = () => {

    const phrase =
        "Explore new places to unlock new perspectives. Every journey with Minds Club is a step into untapped inspiration — where culture, creativity, and curiosity collide. Connect with passionate minds and collaborators who challenge and elevate you.";
    const description = useRef(null);
    const isInView = useInView(description);


    return (
        <section className="relative">
            <MaxWidthWrapper className="pt-28">
                <div className="flex flex-col gap-20">
                    <div ref={description} className="flex justify-center">
                        <div className="relative flex gap-1">
                            <p className="w-full md:w-3/4 text-xl md:text-3xl leading-[1.5] flex flex-wrap gap-1 font-medium">
                                {phrase.split(" ").map((word, index) => (
                                    <span key={index} className="h-fit relative overflow-hidden inline-flex mr-[3px]">
                                        <motion.span
                                            variants={slideUp}
                                            custom={index}
                                            animate={isInView ? "open" : "closed"}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default ContentSectionHomepage