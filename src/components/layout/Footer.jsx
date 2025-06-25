import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

import logo from "@assets/images/logo.svg"
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "../Button";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full min-h-screen bg-[#F9F7F7] py-10">
      <MaxWidthWrapper>
        <div className="relative z-10 rounded-lg py-16">
          <div className="flex flex-col justify-between items-center md:items-center gap-6">
            <h1 className="w-full md:w-1/2 font-bold leading-snug text-2xl md:text-5xl text-white text-center">India&apos;s Largest Community
              of Creative minds.</h1>
            <Button title={"Explore Services"} icon={<FiArrowUpRight size={20} />} className="text-base text-black flex items-center justify-between font-medium gap-2 hover:gap-3 transition-all duration-300 hover:shadow-md" />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5 py-14 md:py-28 text-white">
            <div className="w-full md:w-2/5">
              <h1 className="text-lg md:text-xl font-semibold">Services</h1>
            </div>
            <div className="w-full md:w-2/5">
              <h1 className="text-lg md:text-xl font-semibold">Workshops</h1>
            </div>
            <div className="w-full md:w-1/5">
              <h1 className="text-lg md:text-xl font-semibold">Contact</h1>
            </div>
          </div>
          <div className="text-center text-sm mt-4 px-5">
            © {currentYear} minds-club.com. All rights reserved.
          </div>
        </div>

      </MaxWidthWrapper>
      <div className="absolute inset-0 z-0 w-full h-full">
        <img src="https://ik.imagekit.io/anubhavmaithil/MindsClub/Footer-IMAGE.jpg" alt="Minds-Club footer image" className="w-full h-full object-cover" />
      </div>
    </footer>
  );
};

export default Footer;
