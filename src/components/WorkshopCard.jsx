import { GoArrowRight } from "react-icons/go"
import Button from "./Button"
import { LuUsers } from "react-icons/lu"
import { IoBookmark, IoBookmarkOutline, IoLocationOutline } from "react-icons/io5"
import { MdOutlineDateRange } from "react-icons/md"
import { PiMapPinBold, PiCalendarBlankBold, PiUsersBold } from "react-icons/pi";
import { useState } from "react"


const WorkshopCard = ({ workshop }) => {
    const [bookmark, setBookmark] = useState(workshop.bookmark);

    return (
        <div className="flex-shrink-0 max-w-md w-full bg-white rounded-3xl overflow-hidden transition group cursor-pointer">
            <div className="relative">
                <img
                    src={workshop.image}
                    alt="Yellow product"
                    className="w-full h-72 object-cover"
                />
                <div className="absolute top-4 right-5 flex flex-wrap gap-1">
                    {workshop?.skills?.map((skill, index) => (
                        <span key={index} className="bg-[#FFFE81] text-black text-xs font-medium px-3 py-1 rounded-full hover:bg-white hover:shadow-md transition-all duration-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2 border border-black rounded-full w-fit">
                        <span className="ml-2 text-sm text-black">{workshop?.status}</span>
                        <span className={`text-xs scale-110 group-hover:translate-x-1 transition-all duration-300 px-3 py-0.5 rounded-full font-medium ${workshop?.mode === "Online"
                            ? "bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] text-black"
                            : "bg-gradient-to-r from-[#FF8C21] to-[#FAC74D] text-white"
                            }`}>
                            {workshop?.mode}
                        </span>
                    </div>
                    {/* save button */}
                    <div className="font-medium cursor-pointer text-xl flex"
                        onClick={() => { setBookmark(!bookmark) }}
                    >
                        {!bookmark ? <IoBookmarkOutline /> : <IoBookmark />}
                    </div>

                </div>
                <h2 className="text-xl font-bold leading-snug">{workshop?.title}</h2>
                <p className="text-lg font-bold">{workshop?.subheading}</p>
                <span className="inline-block bg-[#FFFE81] text-xs font-medium px-3 py-1 rounded-full w-fit shadow-sm group-hover:shadow-md transition-all duration-300">{workshop?.duration}</span>
                <p className="text-base font-medium">Mentor - {workshop?.mentor?.name}</p>
                <div className="flex flex-col md:flex-row md:gap-5 md:items-center mt-3">
                    <div className="whitespace-nowrap flex items-center gap-2 text-xs font-medium text-black mb-1">
                        <MdOutlineDateRange />
                        <span>{workshop.date}</span>
                    </div>
                    <div className="whitespace-nowrap flex items-center gap-2 text-xs font-medium text-black mb-1">
                        <IoLocationOutline />
                        <span>{workshop.location}</span>
                    </div>
                    <div className="whitespace-nowrap flex items-center gap-2 text-xs font-medium text-black">
                        <LuUsers />
                        <span>{workshop.limited ? "Limited Seats" : "Open Seats"}</span>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center mt-2">
                    <Button title={workshop?.mode === "Online" ? "Join The Live Sessions" : "Join The Journey"} className={"bg-black text-white font-medium"} />
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                        <GoArrowRight size={28} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopCard