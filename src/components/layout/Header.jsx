import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@store/slices/authSlice";
import { HiMenuAlt3 } from "react-icons/hi";


import logoLable from "@assets/images/logo-white.svg"
import logo from "@assets/images/logo-icon-white.svg"
import { Link } from "react-router-dom";
import Button from "../Button";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logout()).unwrap();
  //     navigate("/login");
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };

  return (
    <header
      className={`z-50 transition-all duration-300 ease-in-out ${isScrolled ? "top-0 px-0 md:px-0 fixed" : "top-10 px-5 md:px-60 fixed"
        } w-full`}
    >
      <nav className={`px-5 py-2 md:py-3 shadow-md  ${isScrolled ? "rounded-none bg-black/50 backdrop-blur-md border-none" : "rounded-full bg-white/20 backdrop-blur-md border border-white/20"} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/" className="block md:hidden">
              <img src={logo} alt="Logo" className="w-12" />
            </Link>
            <Link to="/" className="hidden md:block">
              <img src={logoLable} alt="Logo Label" className="w-32" />
            </Link>
          </div>
          <div className="md:hidden text-white text-3xl">
            <HiMenuAlt3 />
          </div>
          <div className="hidden space-x-5 md:flex gap-3 items-center justify-center font-medium text-white">
            <Link
              to={`/`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Home
              </p>
            </Link>

            <Link
              to={`/about`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                About Us
              </p>
            </Link>

            <Link
              to={`/contact`}
              className="flex gap-3 items-center justify-start group w-fit"
            >
              <p className="text-center relative after:block after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                Contact Us
              </p>
            </Link>
            <Button title="Join Us" onClick={() => { }} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
