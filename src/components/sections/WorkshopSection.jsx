import MaxWidthWrapper from "../layout/MaxWidthWrapper"
import { IoSearchOutline } from "react-icons/io5";
import WorkshopCard from "../WorkshopCard";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { useRef, useState } from "react";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";


const WorkshopSection = () => {
    const workshops = [
        {
            title: "Goa Edition - Branding & Beyond",
            subheading: "Think. Shoot. Design. Create.",
            description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
            image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/Goa.png',
            mode: "On-field",
            status: "New",
            date: "15th - 18th June 2025",
            duration: "3 nights |  4 days",
            location: "South Goa",
            limited: true,
            skills: ["Photography", "Branding", "Design"],
            mentor: {
                name: "Rajeev Mehta",
                image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
            },
            bookmark: false
        },
        {
            title: "Virtual Edition - UI/UX Bootcamp",
            subheading: "Understand. Design. Test. Refine.",
            description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
            image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/Goa.png',
            mode: "Online",
            status: "Trending",
            date: "15th - 18th June 2025",
            duration: "3 days |  3 sessions",
            location: "Online via Zoom/Meet",
            limited: true,
            skills: ["Photography", "Branding", "Design"],
            mentor: {
                name: "Rajeev Mehta",
                image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
            },
            bookmark: false
        },
        {
            title: "Goa Edition - Branding & Beyond",
            subheading: "Think. Shoot. Design. Create.",
            description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
            image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/Goa.png',
            mode: "On-field",
            status: "New",
            date: "15th - 18th June 2025",
            duration: "3 nights |  4 days",
            location: "South Goa",
            limited: true,
            skills: ["Photography", "Branding", "Design"],
            mentor: {
                name: "Rajeev Mehta",
                image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
            },
            bookmark: false
        },
        {
            title: "Virtual Edition - UI/UX Bootcamp",
            subheading: "Understand. Design. Test. Refine.",
            description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
            image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/Goa.png',
            mode: "Online",
            status: "Trending",
            date: "15th - 18th June 2025",
            duration: "3 days |  3 sessions",
            location: "Online via Zoom/Meet",
            limited: true,
            skills: ["Photography", "Branding", "Design"],
            mentor: {
                name: "Rajeev Mehta",
                image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
            },
            bookmark: false
        },
    ];

    const [selectedTheme, setSelectedTheme] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const scrollRef = useRef(null);

    const filteredWorkshops = workshops.filter((workshop) => {
        const matchesMode =
            selectedTheme === "all" || workshop.mode === selectedTheme;
        const matchesSearch =
            workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            workshop.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesMode && matchesSearch;
    });

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollRef.current.clientWidth,
                behavior: "smooth",
            });
        }
    };

    const ModeSelector = [
        { value: "all", label: "All Modes" },
        { value: "Online", label: "Online Workshops" },
        { value: "On-field", label: "Offline Workshops" },
    ]

    return (
        <section className="min-h-screen w-full overflow-x-hidden rounded-md py-14">
            <MaxWidthWrapper>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-start justify-start gap-3 h-full">
                        <h1 className="uppercase">WEBINARS & WORKSHOPS </h1>
                        <h1 className="text-2xl md:text-4xl leading-relaxed font-bold">
                            Explore your creativity <br />
                            through workshops.
                        </h1>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                        <div className="bg-[#ECEAEA] w-full rounded-md px-2 py-2 flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-2">
                            {/* Filters */}
                            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                                <div className="w-full sm:w-[220px]">
                                    <CustomSelect
                                        value={selectedTheme}
                                        onChange={setSelectedTheme}
                                        options={ModeSelector}
                                        placeholder={"Choose Mode"}
                                    />
                                </div>
                                <div className="w-full sm:w-[220px]">
                                    <CustomSelect
                                        value={selectedTheme}
                                        onChange={setSelectedTheme}
                                        options={ModeSelector}
                                        placeholder={"Choose Mode"}
                                    />
                                </div>
                            </div>

                            {/* Search */}
                            <div className="w-full md:w-1/2">
                                <CustomInput
                                    value={searchQuery}
                                    onChange={setSearchQuery}
                                    placeholder="Search by title or location"
                                    icon={<IoSearchOutline />}
                                />
                            </div>
                        </div>

                        {/* Slider Controls */}
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

                    <div ref={scrollRef} className="flex items-center md:gap-5 scrollbar-hide overflow-x-hidden md:overflow-x-scroll rounded-3xl py-4">
                        {filteredWorkshops.length > 0 ? (
                            filteredWorkshops.map((workshop, index) => (
                                <WorkshopCard key={index} workshop={workshop} />
                            ))
                        ) : (
                            <div className="text-gray-500">No workshops found.</div>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default WorkshopSection