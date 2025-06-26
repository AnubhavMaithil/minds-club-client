import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import InsiderItems from "../InsiderItems";

const MindsClubInsider = () => {
    const products = [
        {
            id: 1,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-1.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 2,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-2.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Something"
        },
        {
            id: 3,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-3.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 4,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-1.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Something"
        },
        {
            id: 5,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-2.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 6,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/Image-3.jpg",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Hello"
        },
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const swiperRef = useRef(null);


    return (
        <section className="w-full overflow-hidden rounded-md py-14">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-10">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col items-start justify-start gap-3 h-full">
                            <h1 className="uppercase">Mindsclub | Insider</h1>
                            <h1 className="text-2xl md:text-4xl leading-relaxed font-bold">
                                Interview, Podcast, & Market Trends <br />
                                from top Creative Minds.
                            </h1>
                        </div>
                    </div>
                    <div className="relative">
                        {isMobile ? (
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: true,
                                }}
                                spaceBetween={16}
                                slidesPerView={1.1}
                                loop={true}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onMouseEnter={() => {
                                    if (swiperRef.current) swiperRef.current.autoplay.stop();
                                }}
                                onMouseLeave={() => {
                                    if (swiperRef.current) swiperRef.current.autoplay.start();
                                }}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <InsiderItems product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: true,
                                }}
                                spaceBetween={20}
                                slidesPerView={3.3}
                                loop={true}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    onMouseEnter={() => {
                                        if (swiperRef.current) swiperRef.current.autoplay.stop();
                                    }}
                                    onMouseLeave={() => {
                                        if (swiperRef.current) swiperRef.current.autoplay.start();
                                    }}
                            >
                                {products.map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <InsiderItems product={product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default MindsClubInsider