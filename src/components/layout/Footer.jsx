import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

import logo from "@assets/images/logo.svg"
import MaxWidthWrapper from "./MaxWidthWrapper";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit bg-[#F9F7F7] py-10">
      <MaxWidthWrapper>
        <div className=" flex flex-col md:flex-row flex-wrap gap-10 justify-between items-start md:items-start py-10">

          {/* LOGO */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto">
            <img src={logo} alt="Minds Club Logo" className="w-44" />
            <p className="text-sm font-medium text-center md:text-left">A space to grow, together!</p>
          </div>

          {/* EXPLORE */}
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto">
            <h3 className="text-lg font-medium mb-2">Explore</h3>
            <ul className="space-y-2 text-center md:text-left">
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

          {/* POLICIES */}
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto">
            <h3 className="text-lg font-medium mb-2">Legal & Policies</h3>
            <ul className="space-y-2 text-center md:text-left">
              {["Privacy Policy", "Refund Policy", "Shipping Policy", "Terms & Conditions"].map((policy) => (
                <li key={policy}>
                  <Link to="#" className="text-gray-700 hover:text-gray-900 group w-fit">
                    <p className="w-fit relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {policy}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto">
            <h3 className="text-lg font-medium mb-2">Connect with Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="https://www.instagram.com/the.minds.club" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex gap-1 items-center justify-start group w-fit">
                  <FaInstagram />
                  <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    Instagram
                  </p>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex gap-1 items-center justify-start group w-fit">
                  <FaYoutube />
                  <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    YouTube
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto">
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="mailto:meet@minds-club.com" className="flex gap-2 items-center justify-start group w-fit text-gray-700 hover:text-gray-900">
                  <MdOutlineMailOutline />
                  <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    meet@minds-club.com
                  </p>
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-2 items-center justify-start group w-fit text-gray-700 hover:text-gray-900">
                  <LuPhoneCall />
                  <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                    +91 98765 43210
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-10 border-gray-300" />
        <div className="text-center text-sm mt-4 px-5">
          © {currentYear} minds-club.com. All rights reserved.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
