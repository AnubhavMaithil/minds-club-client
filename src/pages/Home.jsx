import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowRightCircle } from "react-icons/fi";
import { IoArrowForward, IoLocationOutline } from "react-icons/io5";
import { LuArrowDownRight, LuUsers } from "react-icons/lu";


import menuIcon from "@assets/images/menuIcon.svg"
import travelMeetGrow from "@assets/images/travelMeetGrow.svg"
import scrollCreativity from "@assets/images/scrollCreativity.svg"
import explore from "@assets/images/_DSC8286.png"
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from "@/components/Button";
import { useRef } from "react";
import { slideUp } from "@/utils/animation";
import { FaCalendar, FaMapPin, FaUsers } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";


const Home = () => {

  const workshops = [
    {
      title: "Goa Edition - Branding & Beyond",
      description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/Goa.png',
      new: true,
      mode: "On-field",
      date: "15th - 18th June 2025",
      location: "South Goa",
      limited: true,
      skills: ["Photography", "Branding", "Design"],
      mentor: {
        name: "Rajeev Mehta",
        image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
      }
    },
    {
      title: "Goa Edition - Branding & Beyond",
      description: "Master the art of thinking, shooting, and designing like a pro. 4-day on-field branding workshop in Goa.",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/pottery.png',
      new: true,
      mode: "Online",
      date: "15th - 18th June 2025",
      location: "South Goa",
      limited: true,
      skills: ["Photography", "Branding", "Design"],
      mentor: {
        name: "Rajeev Mehta",
        image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/TheRajeevMehta.png?updatedAt=1747771099391"
      }
    },

  ];


  const phrase =
    "Explore new places to unlock new perspectives. Every journey with Minds Club is a step into untapped inspiration — where culture, creativity, and curiosity collide. Connect with passionate minds and collaborators who challenge and elevate you.";
  const description = useRef(null);
  const isInView = useInView(description);


  return (
    <>
      {/* <div>

      </div> */}
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="h-screen overflow-hidden">
          <div
            className="w-full px-2 md:px-60 relative z-20 flex flex-col items-start justify-between h-full"
          >
            <div className="w-full h-full flex flex-col gap-3 md:gap-5 items-center md:items-start justify-center">
              <h1 className="text-white text-2xl md:text-5xl text-center md:text-left font-semibold">Where Creative Minds <br /> Travel, Meet & Grow.</h1>
              <Button title="Start your journey" className={"capitalize font-semibold"} onClick={() => { }} />
            </div>

            <div className="absolute bottom-5 right-40 bg-white/30 backdrop-blur-md rounded-xl px-4 py-7 flex-col md:flex-row items-center gap-5 hidden md:flex">
              {/* Designers */}
              <div className="flex items-center gap-[-20px] md:gap-[-40px]">
                <div className="relative z-10">
                  <img src={"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="relative z-20 -ml-4">
                  <img src={"https://plus.unsplash.com/premium_photo-1661373447898-bed76be49ec2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="relative z-30 -ml-4">
                  <img src={"https://images.unsplash.com/photo-1702700520332-536ae21dc284?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={""} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                </div>
              </div>

              {/* Text */}
              <div className="">
                <h2 className="text-white text-sm font-semibold leading-tight">
                  Handpicked<br />Designers
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-black/40 h-full">
            <video src={"https://ik.imagekit.io/anubhavmaithil/MindsClub/main.mp4?updatedAt=1747597313898"} autoPlay muted playsInline loop className="w-full h-full object-cover" />
          </div>
        </section>
        {/* Hero Section End */}

        {/* Content Section */}
        <section className="relative">
          <div className="w-full h-full py-28 px-5 md:px-16 flex flex-col gap-20">
            <div
              ref={description}
              className="flex justify-center"
            >
              <div className="relative flex gap-1">
                <p className="w-full md:w-3/4 text-xl md:text-3xl leading-[1.5] flex flex-wrap gap-1">
                  {phrase.split(" ").map((word, index) => (
                    <span key={index} className="h-fit relative overflow-hidden inline-flex mr-[3px]">
                      <motion.span
                        variants={slideUp}
                        custom={index}
                        animate={isInView ? "open" : "closed"}
                        key={index}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </p>

              </div>
            </div>
          </div>
        </section>
        {/* Content Section End */}

        {/* Explore The One */}
        {/* <section className="h-screen overflow-hidden rounded-md px-5">
          <div className="h-full rounded-lg overflow-hidden flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://ik.imagekit.io/anubhavmaithil/MindsClub/theOneGroup.png?updatedAt=1747600038625')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="h-1/3 md:h-2/3"></div>
            <div className="md:h-1/3 text-center flex flex-col items-center justify-start gap-3">
              <h5 className="font-medium text-[#FCFF2A] text-xl">Collaborate With Top-Tier Designers From &quot;The One.&quot;</h5>

              <div className="w-fit flex items-center gap-2 bg-[#FCFF2A] text-black rounded-full cursor-pointer px-5 py-2">
                <h5 className="font-medium">Explore The One</h5>
                <FiArrowDownRight />
              </div>
            </div>
          </div>
        </section> */}
        {/* /* Explore The One End */}

        {/* Workshops */}
        <section className="min-h-screen w-full overflow-hidden rounded-md py-10 md:py-28 px-5 md:px-16 flex flex-col gap-10">
          <div className="flex flex-col items-start justify-start gap-3 h-full">
            <h1 className="uppercase">
              Workshops
            </h1>
            <h1 className="capitalize text-2xl md:text-4xl leading-relaxed font-bold">
              Explore your creativity <br />
              through workshops.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {workshops.map((workshop, index) => (
              <div key={index} className="rounded-4xl border border-gray-400 overflow-hidden shadow-sm p-5">
                <div className="relative rounded-3xl">
                  <div className="w-full h-96">
                    <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover rounded-3xl" />
                  </div>
                  <div className="absolute top-5 left-5 flex gap-2">
                    {workshop.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm border border-white text-white px-2 py-0.5 rounded-full"
                      >
                        {skill.toLowerCase()}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white pt-4 pl-4 pb-0 pr-0 rounded-tl-3xl scale-105">
                    <img
                      src={workshop.mentor.image}
                      alt={workshop.mentor.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                  </div>
                </div>
                <div className="pt-4 flex flex-col items-start gap-3 md:gap-2">
                  <div className="flex items-center gap-2 mb-1 border border-black rounded-full w-fit">
                    {workshop.new && <span className="ml-2 text-xs text-black">New</span>}
                    <span
                      className={`text-sm scale-110 px-3 py-0.5 rounded-full font-medium ${workshop.mode === "Online"
                        ? "bg-gradient-to-r from-[#D4FC79] to-[#96E6A1] text-black"
                        : "bg-gradient-to-r from-[#FF8C21] to-[#FAC74D] text-white"
                        }`}
                    >
                      {workshop.mode}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{workshop.title}</h3>
                  <p className="md:w-2/3 text-sm text-gray-600 mb-3">{workshop.description}</p>


                  <div className="flexmd:gap-5 items-center mt-5">
                    <div className="flex items-center gap-2 md:gap-2 text-sm font-medium text-black mb-1">
                      <MdOutlineDateRange />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-2 text-sm font-medium text-black mb-1">
                      <IoLocationOutline />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-2 text-sm font-medium text-black">
                      <LuUsers />
                      <span>{workshop.limited ? "Limited Seats" : "Open Seats"}</span>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <Button title={"Book your spot"} className={"bg-black text-white "} />
                    <GoArrowRight size={28} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Workshops End */}


        {/* Shop */}
        {/* <section className="min-h-screen w-full overflow-hidden rounded-md py-10 md:py-28 px-5 md:px-16 flex flex-col gap-10">
          <div className="flex flex-col items-start justify-start gap-3 h-full">
            <h1 className="uppercase">
              Workshops
            </h1>
            <h1 className="capitalize text-2xl md:text-4xl leading-relaxed font-bold">
              Explore your creativity <br />
              through workshops.
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {workshops.map((workshop, index) => (
              <div key={index} className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-5">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={workshop.image} alt={workshop.title} className="w-full h-74 object-cover" />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {workshop.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs border border-white text-white px-2 py-0.5 rounded-full"
                      >
                        {skill.toLowerCase()}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white pt-3 pl-3 pb-2 pr-2 rounded-tl-xl">
                    <img
                      src={workshop.mentor.image}
                      alt={workshop.mentor.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white"
                    />
                  </div>
                </div>
                <div className="pt-4 flex flex-col items-start gap-2">
                  <div className="flex items-center gap-2 mb-1 border rounded-full w-fit">
                    {workshop.new && <span className="ml-2 text-sm text-gray-800">New</span>}
                    <span
                      className={`text-sm px-3 py-0.5 rounded-full font-medium ${workshop.mode === "Online"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                        }`}
                    >
                      {workshop.mode}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">{workshop.title}</h3>
                  <p className="w-2/3 text-xs md:text-sm text-gray-600 mb-3">{workshop.description}</p>


                  <div className="flex gap-5 items-center mt-5">
                    <div className="flex items-center gap-2 text-sm font-medium text-black mb-1">
                      <FaCalendar size={14} />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-black mb-1">
                      <FaMapPin size={14} />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-black">
                      <FaUsers size={14} />
                      <span>{workshop.limited ? "Limited Seats" : "Open Seats"}</span>
                    </div>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <Button title={"Book your spot"} className={"bg-black text-white "} />
                    <GoArrowRight size={28} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        {/* Shop End */}


        {/* The ONE Group */}
        {/* <div className="w-full py-14 px-5 md:px-16 flex flex-col gap-5">
          <h1 className="w-full md:w-1/2 text-2xl font-medium">Minds-Club isn&apos;t just about learning-it&apos;s about experiencing creativity firsthand. Step into an immersive space where nature, design, and collaboration redefine education.</h1>

          <motion.img
            src="https://ik.imagekit.io/anubhavmaithil/MindsClub/DSC08968.png?updatedAt=1747687763830"
            alt="Subtle Animated"
            initial={{ y: 20, scale: 0.98 }}
            animate={{
              y: [20, 15, 20],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="w-full object-cover rounded-md"
          />
        </div> */}
        {/* The ONE Group End */}

        {/* Designer Section */}
        {/* <div className="min-h-screen w-full py-28 px-5 md:px-16 flex flex-col gap-20 text-white bg-black">
          <h1 className="text-3xl lg:text-7xl w-full md:w-2/3 md:mx-auto leading-none font-medium text-center capitalize">Designers we Admire, Words we cherish</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:px-40">
            {reviews.map((review, index) => (
              <div key={index} className="flex flex-col items-start justify-start gap-5">
                <img src={review.image} alt={review.name} className="w-full h-72 object-cover" />
                <h1 className="text-xl font-medium">{review.name}</h1>
                <p className="text-sm">{review.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        {/* Designer Section End */}
      </div>
    </>

  );
};

export default Home;
