import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowRightCircle } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import { LuArrowDownRight } from "react-icons/lu";


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

const Home = () => {

  const imageSet1 = [
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
  ];
  const imageSet2 = [
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/img.png?updatedAt=1747574937783",
    "https://ik.imagekit.io/anubhavmaithil/MindsClub/homepageMain.png?updatedAt=1747570334069",
  ];

  const prevWorkshops = [
    {
      title: "Workshop 1",
      description: "Description 1",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork2.png?updatedAt=1747683885835'
    },
    {
      title: "Workshop 2",
      description: "Description 2",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork1.png?updatedAt=1747683885816'
    },
    {
      title: "Workshop 3",
      description: "Description 3",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork3.png?updatedAt=1747683885890'
    },
    {
      title: "Workshop 1",
      description: "Description 1",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork2.png?updatedAt=1747683885835'
    },
    {
      title: "Workshop 2",
      description: "Description 2",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork1.png?updatedAt=1747683885816'
    },
    {
      title: "Workshop 3",
      description: "Description 3",
      image: 'https://ik.imagekit.io/anubhavmaithil/MindsClub/PrevWork3.png?updatedAt=1747683885890'
    },
  ];


  const reviews = [
    {
      name: "Raj Kashyap",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/raj.png"
    },
    {
      name: "Prashant Kulshresths",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/prashant.png"
    },
    {
      name: "Ashwani Singh",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/ashwani.png"
    },
    {
      name: "Ramneetpal Kaur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://ik.imagekit.io/anubhavmaithil/MindsClub/ramneetpal.png"
    },

  ]

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
            className="w-full px-2 md:px-40 relative z-20 flex flex-col items-start justify-between h-full"
          >
            <div className="w-full h-full flex flex-col gap-3 md:gap-5 items-center md:items-start justify-center">
              <h1 className="text-white text-2xl md:text-5xl text-center md:text-left font-semibold">Where Creative Minds <br /> Travel, Meet & Grow.</h1>
              <Button title="Start your journey" className={"capitalize font-semibold"} onClick={() => { }} />
            </div>

            <div className="absolute bottom-5 right-40 bg-white/30 backdrop-blur-md rounded-[40px] px-4 py-7 flex-col md:flex-row items-center gap-5 hidden md:flex">
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
                {/* Animated Heading */}
                <p className="w-full md:w-2/3 text-xl md:text-4xl leading-[1.3] flex flex-wrap gap-1">
                  {phrase.split(" ").map((word, index) => (
                    <span key={index} className="relative overflow-hidden inline-flex mr-[3px]">
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
        {/* Explore The One End */}

        {/* Workshops */}
        {/* <section className="min-h-screen w-full overflow-hidden">
          <div className="w-full h-full py-14 px-5 md:px-16 flex flex-col gap-5">
            <h1 className="text-5xl lg:text-8xl w-4/5 md:w-3/5 md:mx-auto leading-none font-medium md:text-center">Beyond Learning, It&apos;s Experience</h1>
            <hr className="border-2 border-gray-500 rounded-md" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <div className="flex gap-2 items-center justify-center w-fit">
                <h1 className="text-xl">Upcoming work shops </h1>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <LuArrowDownRight className="text-2xl font-bold" />
                </motion.div>
              </div>
              <div className="hidden md:flex gap-2 items-center justify-center w-fit bg-black text-white rounded-full cursor-pointer px-5 py-2">
                <p>View All</p>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IoArrowForward />
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10 overflow-y-scroll scrollbar-hide">
              {prevWorkshops.map((workshop, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="flex flex-col items-start justify-start gap-2">
                    <img src={workshop.image} alt={workshop.title} className="w-96 object-cover" />
                    <h1 className="text-black text-2xl font-medium">{workshop.title}</h1>
                    <div className="hidden md:flex gap-2 items-center justify-center w-fit bg-black text-white rounded-full cursor-pointer px-5 py-2">
                      <p className="text-sm">View Details</p>
                      <LuArrowDownRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Workshops End */}


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
