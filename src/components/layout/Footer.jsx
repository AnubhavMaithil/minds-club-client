import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

import logo from "@assets/images/logo.svg"


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit flex flex-col gap-5 bg-[#F9F7F7] px-10 py-10">
      {/* <div className="flex flex-col gap-10 md:flex-row justify-between items-start py-5 md:py-20"> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-10 items-start py-5 md:py-20">

        {/* MINDS CLUB LOGO */}
        <div className="col-span-2 md:col-span-2 flex flex-col items-start justify-center">
          <img src={logo} alt="Minds Club Logo" className="w-44" />
          <p className="text-sm font-medium">
            A space to grow, together!
          </p>
        </div>

        {/* EXPLORE */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg font-medium mb-2">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/workshops" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Workshops
                </p>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Shop
                </p>
              </Link>
            </li>
            <li>
              <Link to="/the-one" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  The One
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL & POLICIES */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg font-medium mb-2">Legal & Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Privacy Policy
                </p>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Refund Policy
                </p>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Shipping Policy
                </p>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-700 hover:text-gray-900 group w-fit">
                <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Terms & Conditions
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* CONNECT WITH US */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg font-medium mb-2">Connect with Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="https://www.instagram.com/the.minds.club" target="_blank" className="text-gray-700 hover:text-gray-900 flex gap-1 items-center justify-start group w-fit">
                <FaInstagram />
                <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Instagram
                </p>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-700 hover:text-gray-900 flex gap-1 items-center justify-start group w-fit">
                <FaYoutube />
                <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  Youtube
                </p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start justify-center">
          <h3 className="text-lg font-medium mb-2">Contact</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to={`mailto:meet@minds-club.com`}
                className="flex gap-2 items-center justify-start group w-fit"
              >
                <MdOutlineMailOutline />
                <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  meet@minds-club.com
                </p>
              </Link>
            </li>
            <li>
              <Link
                to={`tel:+919876543210`}
                className="flex gap-2 items-center justify-start group w-fit"
              >
                <LuPhoneCall />
                <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  +91 98765 43210
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-gray-500 rounded-md" />
      <div className="text-center">Copyright © {currentYear} minds-club.com. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
