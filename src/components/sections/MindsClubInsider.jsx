import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import ShopItems from "../ShopItems";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import InsiderItems from "../InsiderItems";

const MindsClubInsider = () => {
    const products = [
        {
            id: 1,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 2,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Something"
        },
        {
            id: 3,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 4,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Something"
        },
        {
            id: 5,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Podcast"
        },
        {
            id: 6,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            type: "Hello"
        },
    ]

    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollByCard = () => {
        if (!scrollRef.current) return 0;
        const firstCard = scrollRef.current.querySelector("div");
        return firstCard ? firstCard.clientWidth + 20 : 320;
    };

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollByCard() * index,
                behavior: "smooth",
            });
        }
    };

    // Auto scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % products.length;
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [products.length]);


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
                        <div
                            ref={scrollRef}
                            className="hideScrollbar flex flex-row md:gap-5 overflow-x-auto scroll-smooth py-4 scrollbar-hide"
                        >
                            {products.map((product, index) => (
                                <InsiderItems key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default MindsClubInsider