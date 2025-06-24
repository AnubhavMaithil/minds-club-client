import { useRef } from "react";
import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import ShopItems from "../ShopItems";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const ShopSection = () => {
    const products = [
        {
            id: 1,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
        {
            id: 2,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
        {
            id: 3,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
        {
            id: 4,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
        {
            id: 5,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
        {
            id: 6,
            title: "Electomania",
            description: "Sun Hat for Men and Women",
            image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/hat.png",
            video: "https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4",
            colors: ["#8B4513", "#CD853F", "#F5DEB3"]
        },
    ]

    const scrollRef = useRef(null);

    const scrollByCard = () => {
        if (!scrollRef.current) return 0;
        // Assuming each card's width + gap is about 300px; adjust if needed
        const firstCard = scrollRef.current.querySelector('div');
        return firstCard ? firstCard.clientWidth + 20 : 320;
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollByCard(),
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollByCard(),
                behavior: "smooth",
            });
        }
    };


    return (
        <section className="w-full overflow-hidden rounded-md py-14">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-10">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col items-start justify-start gap-3 h-full">
                            <h1 className="uppercase">Shop</h1>
                            <h1 className="text-2xl md:text-4xl leading-relaxed font-bold">
                                Essentials for every <br />
                                journey.
                            </h1>
                        </div>
                        <div className="flex gap-2 items-center self-end md:self-auto">
                            <div
                                className="p-2 border border-gray-300 rounded-full cursor-pointer hover:shadow-lg"
                                onClick={scrollLeft}
                            >
                                <RxChevronLeft size={22} />
                            </div>
                            <div
                                className="p-2 border border-gray-300 rounded-full cursor-pointer hover:shadow-lg"
                                onClick={scrollRight}
                            >
                                <RxChevronRight size={22} />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div ref={scrollRef} className="flex flex-row gap-5 overflow-x-auto scroll-smooth py-4 scrollbar-hide">
                            {products.map((product, index) => (
                                <ShopItems key={index} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default ShopSection