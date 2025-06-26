import { useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Button from "./Button";
import { FiArrowUpRight } from "react-icons/fi";

const InsiderItems = ({ product }) => {
    // const videoRef = useRef(null);

    // const handleMouseEnter = () => {
    //     if (videoRef.current) {
    //         videoRef.current.play().catch(() => { });
    //     }
    // };

    // const handleMouseLeave = () => {
    //     if (videoRef.current) {
    //         videoRef.current.pause();
    //         videoRef.current.currentTime = 0;
    //     }
    // };

    return (
        <div
            className="flex-shrink-0 w-full max-w-sm rounded-4xl overflow-hidden shadow-sm border border-gray-200 h-[500px] relative group"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            {/* Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105 object-cover"
                style={{ backgroundImage: `url(${product.image})` }}
            />

            {/* Video Layer */}
            {/* <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                src={product.video}
                muted
                playsInline
                loop
                preload="auto"
            /> */}

            {/* Color Badges */}
            <div className="absolute inset-0 flex items-start justify-end p-5 z-10">
                <span className="text-white border border-white text-base md:text-sm font-bold px-3 py-1 rounded-full hover:bg-white hover:shadow-md transition-all duration-300">
                    {product.type}
                </span>
            </div>

            {/* Text Content */}
            <div className="relative z-10 p-5 text-white h-full flex items-end justify-center">
                <Button
                    title="Included with membership"
                    className="w-fit bg-black text-white flex items-center justify-center gap-2 font-medium hover:bg-white hover:text-black hover:gap-4 transition-all duration-300"
                    icon={<FiArrowUpRight size={20} className="mt-0.5" />}
                />
            </div>
        </div>
    );
};

export default InsiderItems;