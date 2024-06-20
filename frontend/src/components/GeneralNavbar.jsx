import { useState, useEffect, React } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import notification from "../assets/notification.svg";
import GeneralSidebar from "./GeneralSidebar";
import dark from "../assets/dark.svg";
import light from "../assets/light.svg";

const GeneralNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [generalMenuToggle, setGeneralMenuToggle] = useState(false);

  useEffect(() => {
    if (generalMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [generalMenuToggle]);

  const handleGeneralMenuToggle = () => {
    setGeneralMenuToggle((previous) => !previous);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`p-4 lg:px-0 flex justify-between z-[10] fixed top-0 w-full transition-colors duration-200 ${
          isScrolled ? "bg-opacity-100 bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between lg:px-[6rem] w-[2000px] mx-auto">
          <div className="left flex gap-6 items-center">
            <div className="logo text-white sm:mr-[3rem]">
              <Link to={"/"}>Atom</Link>
            </div>
            <div className="text-white font-bold">Hi, PRAISE</div>
          </div>
          <div className="light-dark-mode hidden sm:block">
            <div className="light-dark-mode justify-center py-[.5rem] gap-8 rounded-xl flex items-center font-bold text-white px-3 bg-white bg-opacity-20 hover:bg-opacity-10 transition duration-300 ease-in-out cursor-pointer">
              <img src={darkMode ? light : dark} alt="" className="w-4" />
            </div>
          </div>
        </div>
        <div className="right mt-1">
          <div className="small-screen flex items-center sm:hidden relative">
            <div className="notification h-10 w-10 mr-9 grid relative items-center">
              <img src={notification} alt="" className="w-6" />
              <div className="red-point h-3 w-3 bg-red-600 absolute bottom-3 rounded-full left-3 bottom-6"></div>
            </div>
            <div className="hamburger ">
              <img
                src={generalMenuToggle ? close : menu}
                alt="hamburger-menu"
                onClick={handleGeneralMenuToggle}
                className="h-[30px] w-[30px]"
              />
            </div>
          </div>
        </div>
      </div>

      <GeneralSidebar
        generalMenuToggle={generalMenuToggle}
        setGeneralMenuToggle={setGeneralMenuToggle}
        handleGeneralMenuToggle={handleGeneralMenuToggle}
      />
    </>
  );
};

export default GeneralNavbar;
