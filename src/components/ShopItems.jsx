import { useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Button from "./Button";

const ShopItems = ({ product }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="flex-shrink-0 w-full max-w-sm rounded-4xl overflow-hidden shadow-sm border border-gray-200 h-[450px] relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-top transition-opacity duration-500 group-hover:opacity-0"
                style={{ backgroundImage: `url(${product.image})`, backgroundSize: "150%" }}
            />

            {/* Video Layer */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                src={product.video}
                muted
                playsInline
                loop
                preload="auto"
            />

            {/* Color Badges */}
            <div className="absolute inset-0 flex items-start justify-end p-5 z-10">
                {product.colors.map((color, index) => (
                    <span
                        key={index}
                        className="inline-block w-7 h-7 rounded-full cursor-pointer"
                        style={{
                            backgroundColor: color,
                            marginLeft: index === 0 ? 0 : -11,
                            zIndex: product.colors.length - index,
                            position: 'relative',
                            border: index === 0 ? '2px solid white' : 'none',
                        }}
                    />
                ))}
            </div>

            {/* Text Content */}
            <div className="relative z-10 p-5 text-white h-full flex flex-col justify-end">
                <h2 className="text-lg md:text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-sm font-medium mb-4">{product.description}</p>
                <Button
                    title="Add to Cart"
                    className="text-black flex items-center justify-between font-medium"
                    icon={<FaChevronRight />}
                />
            </div>
        </div>
    );
};

export default ShopItems;