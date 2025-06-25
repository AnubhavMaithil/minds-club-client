import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

import logo from "@assets/images/logo-white.svg"
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "../Button";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#F9F7F7] min-h-screen group/image">
      <MaxWidthWrapper>
        <div className="min-h-screen relative z-10 rounded-lg py-14 flex flex-col items-center justify-between gap-10 md:gap-20">
          <div className="w-full flex flex-col justify-between items-center md:items-center gap-6 mt-0 md:mt-5">
            <h1 className="w-full md:w-1/2 font-bold leading-snug text-2xl md:text-5xl text-white text-center">India&apos;s Largest Community
              of Creative minds.</h1>
            <Button title={"Explore Services"} icon={<FiArrowUpRight size={20} />} className="text-base text-black flex items-center justify-between font-medium gap-2 hover:gap-3 transition-all duration-300 hover:shadow-md" />
          </div>

          <div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-5 text-white">
            <div className="w-full md:w-2/5 flex flex-col items-start gap-3">
              <h1 className="text-xl md:text-2xl font-semibold">Services</h1>
              <div className="w-full flex">
                <div className="w-1/2 flex flex-col items-start gap-3">
                  <h2 className="flex gap-2 items-center font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
                    Design Services <FiArrowUpRight size={20} />
                  </h2>
                  <ul className="space-y-2 text-center md:text-left">
                    <li>
                      <Link to="/workshops" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Workshops
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Shop
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/the-one" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          The One
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 flex flex-col items-start gap-3">
                  <h2 className="flex gap-2 items-center font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
                    Design Services <FiArrowUpRight size={20} />
                  </h2>
                  <ul className="space-y-2 text-center md:text-left">
                    <li>
                      <Link to="/workshops" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Workshops
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Shop
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/the-one" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          The One
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-start gap-3">
              <h1 className="text-xl md:text-2xl font-semibold">Workshops</h1>
              <div className="w-full flex">

                <div className="w-1/2 flex flex-col items-start gap-3">
                  <h2 className="flex gap-2 items-center font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
                    Design Services <FiArrowUpRight size={20} />
                  </h2>
                  <ul className="space-y-2 text-center md:text-left">
                    <li>
                      <Link to="/workshops" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Workshops
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Shop
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/the-one" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          The One
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="w-1/2 flex flex-col items-start gap-3">
                  <h2 className="flex gap-2 items-center font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
                    Design Services <FiArrowUpRight size={20} />
                  </h2>
                  <ul className="space-y-2 text-center md:text-left">
                    <li>
                      <Link to="/workshops" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Workshops
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          Shop
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/the-one" className="text-white group w-fit">
                        <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                          The One
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/5 flex flex-col items-start gap-3">
              <h1 className="text-xl md:text-2xl font-semibold">Contact</h1>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <a href="mailto:meet@minds-club.com" className="flex gap-2 items-center justify-start group w-fit text-white">
                    Email -{" "}
                    <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      meet@minds-club.com
                    </p>
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex gap-2 items-center justify-start group w-fit text-white">
                    Phone No. -{" "}
                    <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      +91 98765 43210
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-5 text-white">
            <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-1/3">
              <img src={logo} alt="Minds Club Logo" className="w-48" />
              <p className="text-sm font-medium text-white text-center">A space to grow, together!</p>
            </div>

            <div className="flex items-center justify-center md:justify-center gap-4 w-full md:w-1/2">
              <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-20 text-center md:text-left">
                <li>
                  <Link to="/workshops" className="text-white group w-fit">
                    <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 text-sm md:text-base">
                      Privacy Policy
                    </p>
                    <hr className="w-full md:hidden" />
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="text-white group w-fit">
                    <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 text-sm md:text-base">
                      Terms & Conditions
                    </p>
                    <hr className="w-full md:hidden" />
                  </Link>
                </li>
                <li>
                  <Link to="/the-one" className="text-white group w-fit">
                    <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 text-sm md:text-base">
                      Shipping Policy
                    </p>
                    <hr className="w-full md:hidden" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end gap-4">
              <div className="p-3 md:p-4 border border-white text-white flex items-center justify-center rounded-full text-lg md:text-xl cursor-pointer hover:shadow-lg hover:bg-black/30 transition-all duration-300">
                <FaLinkedinIn />
              </div>
              <div className="p-3 md:p-4 border border-white text-white flex items-center justify-center rounded-full text-lg md:text-xl cursor-pointer hover:shadow-lg hover:bg-black/30 transition-all duration-300">
                <FaInstagram />
              </div>
              <div className="p-3 md:p-4 border border-white text-white flex items-center justify-center rounded-full text-lg md:text-xl cursor-pointer hover:shadow-lg hover:bg-black/30 transition-all duration-300">
                <FaYoutube />
              </div>
              <div className="p-3 md:p-4 border border-white text-white flex items-center justify-center rounded-full text-lg md:text-xl cursor-pointer hover:shadow-lg hover:bg-black/30 transition-all duration-300">
                <FaXTwitter />
              </div>
            </div>
          </div>

          <div className="text-center text-white font-medium text-sm md:text-base">
            © {currentYear} minds-club.com. All rights reserved.
          </div>
        </div>

        <div className="absolute inset-0 z-0 group overflow-hidden">
          <img
            src="https://ik.imagekit.io/anubhavmaithil/MindsClub/Footer-IMAGE.jpg"
            alt="Minds-Club footer image"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover/image:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
