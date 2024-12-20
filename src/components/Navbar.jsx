import React, { useState } from "react";
import { assets } from "../assets/assets";


const Navbar = () => {

    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
      setActiveLink(link);
      
    };




    const [showMenu, setShowMenu] = useState(false)



  return (
    <div className="fixed z-[50] bg-[#1b1b1b] p-3 pl-10 w-full top-0 left-0">
        <div className="md:flex items-center justify-between md:px-10">
        <a href="#" className="font-medium text-2xl text-white">
         Musty
        </a>
        <div onClick={()=>setShowMenu(!showMenu)} className="absolute right-8 top-3 cursor-pointer md:hidden">
            {showMenu ? 
        <img width={30} height={30} src={assets.close_icon} alt="" />
            :
        <img width={30} height={30}  src={assets.menu_icon} alt="" />
        }
        </div>
        <div className={`flex flex-col items-center text-xl gap-10 font-medium bg-black md:bg-transparent text-center md:flex-row pt-5 md:items-center md:pb-5 pb-12 absolute md:static md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 transition-all ease-in duration-300 ${showMenu ? 'top-[3.5rem] opacity-100':'top-[-490px] opacity-0 md:opacity-100'}`}>
             <a
              href="#home"
              onClick={() => handleLinkClick('home')}
              className={`${
                activeLink === 'home' ? 'text-[#8E4AE4]' : "text-white hover:text-[#8E4AE4] duration-300"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick('about')}
              className={`${
                activeLink === 'about' ? 'text-[#8E4AE4]' : "text-white hover:text-[#8E4AE4] duration-300"
              }`}
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => handleLinkClick('services')}
              className={`${
                activeLink === 'services' ? 'text-[#8E4AE4]' : "text-white hover:text-[#8E4AE4] duration-300"
              }`}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => handleLinkClick('projects')}
              className={`${
                activeLink === 'projects' ? 'text-[#8E4AE4]' : "text-white hover:text-[#8E4AE4] duration-300"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className={`${
                activeLink === 'contact' ? 'text-[#8E4AE4]' : "text-white hover:text-[#8E4AE4] duration-300"
              }`}
            >
              Contact
            </a>
            <button className="bg-white px-6 py-2 ">Let's Talk</button>
        </div>
        </div>
    </div>

  );
};

export default Navbar;
