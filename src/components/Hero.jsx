import React, { useState } from "react";
import { assets } from "../assets/assets";
import EmailButton from "./EmailButton";

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");
  const [toggleColor, setToggleColor] = useState("Dark");
  const [fullNameColor, setFullNameColor] = useState("#FFF7DF");
  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "white" ? "black" : "white");
    setButtonStyle(buttonStyle === "black" ? "white" : "black");
    setToggleColor(toggleColor === "Dark" ? "Light" : "Dark");
    setFullNameColor(fullNameColor === "#FFF7DF" ? "gray" : "#FFF7DF");
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="rounded-r-lg mt-[10rem] shadow-lg cursor-pointer fixed w-16 text-xl flex items-center justify-center bg-blue-600 h-10 p-2 text-white"
      >
        {toggleColor}
      </div>
      <div
        id="home"
        style={{ backgroundColor, color: textColor, borderBottom: "none" }}
        className="md:mt-[5.5rem] flex md:flex-row flex-col border border-1 border-gray-300"
      >
        <div className="w-full md:w-2/4 flex gap-10 justify-center flex-col h-screen p-10">
          <span
            style={{ backgroundColor: fullNameColor }}
            className="name p-4 bg-[#FFF7DF] md:w-2/4 text-[#FFC72A] font-semibold text-2xl"
          >
            Hi! I'm Mustapha Lawal
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold">
            FRONTEND <br /> <span className="font-bold">WEB DEVELOPER</span>
          </h1>
          <p className="font-semibold text-gray-500 text-baseline text-justify">
            I specialize in creating engaging, responsive, and user-friendly web
            experiences. Skilled in HTML, CSS, JavaScript, and modern frameworks
            like React JS, Next JS and Tailwind CSS, I focus on building
            seamless interfaces that provide intuitive navigation and
            exceptional performance across devices.
          </p>
          <div className="flex gap-5 font-semibold">
            <button className="bg-purple-500 text-white text-xl py-3 px-7">
              Hire Me
            </button>
            <button
              style={{ buttonStyle, text: textColor }}
              className="text-xl py-3 px-7 border border-1"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="p-5 w-full md:w-2/4 flex items-center justify-center bg-gradient-to-b from-violet-500 to-[#FFF7DF]">
          <div className="w-3/4 h-3/4 bg-black rounded-xl">
            <div
              className="flex justify-center items-center w-full h-full overflow-hidden 
          rounded-xl bg-white border border-[4px] border-black duration-300 hover:rotate-12"
            >
              <img
                className="w-full rotate-[360deg]"
                src={assets.profile_pic}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        style={{ backgroundColor, color: textColor }}
        className="w-full p-10 flex flex-col gap-10"
      >
        <button className="bg-purple-500 w-[150px] text-white rounded-3xl font-medium px-5 py-3">
          ABOUT ME
        </button>
        <span
          style={{ text: textColor }}
          className="name font-semibold text-2xl"
        >
          Hi! I'm Mustapha Lawal
        </span>
        <p className="font-semibold text-gray-500 text-lg text-justify">
          I'm Passionate Frontend Developer with a keen eye for design and user
          experience. I specialize in creating responsive, user-friendly
          websites using the latest web technologies like HTML, CSS, JavaScript,
          Tailwind CSS, React JS and Next Js. My goal is to bring creative ideas
          to life while ensuring seamless performance and accessibility. I
          thrive on turning complex problems into simple, elegant solutions, and
          I’m always excited to explore new tools and frameworks to improve my
          craft. Let’s build something amazing together!
        </p>
        <div className="flex md:flex-row gap-5 flex-col justify-between md:mt-10">
          <div className="flex flex-col">
            <p className="font-semibold text-gray-500 text-lg">Contact Email</p>
            <p className="font-semibold text-lg">
              mustaphaishola2021@gmail.com
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-500 text-lg">Phone</p>
            <p className="font-semibold text-lg">+(234)-906-532-3916</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-500 text-lg">Language</p>
            <p className="font-semibold text-lg">English-Yoruba</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-500 text-lg">Interest</p>
            <p className="font-semibold text-lg">
              Reading & Research, Coding, Music
            </p>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="w-full bg-[#1b1b1b] p-10 flex items-center justify-center flex-col gap-5"
      >
        <button className="bg-purple-500 w-[150px] text-white rounded-3xl font-medium px-5 py-3">
          SERVICES
        </button>
        <h1 className="text-white text-3xl font-medium">Services I Offer</h1>
        <p className="md:mx-10 md:px-10 font-semibold text-gray-400 text-center">
          Whether you're building a website from scratch, need a stunning visual
          identity, or want to optimize an existing project, I’m here to help
          with the creative and technical aspects of your digital journey!
        </p>
        <div className="w-full flex md:flex-row flex-col gap-5 px-5">
          <div className="md:w-2/4 py-5 flex flex-col gap-7 bg-gray-900 border border-2 border-gray-500">
            <div className="flex flex-col ml-5 items-center gap-3">
              <div className="flex">
                <div className="w-12 h-12 mr-[-1.5rem] rounded-full bg-yellow-500"></div>
                <div className="w-12 h-12 rounded-full bg-purple-500"></div>
              </div>
              <h1 className="text-white text-2xl font-medium">
                Frontend Development
              </h1>
            </div>
            <ul className="w-full flex flex-col text-center items-center gap-3 px-5 font-semibold text-gray-400">
              <li>* Responsive Website Design & Development</li>
              <li>
                * Web Application Development (using HTML, CSS, Tailwind CSS,
                JavaScript, React Js and Next Js.)
              </li>
              <li>* Cross-Browser & Device Compatibility</li>
              <li>* UI/UX Design & Optimization</li>
              <li>* Performance Optimization & SEO Best Practices</li>
            </ul>
          </div>
          <div className="md:w-2/4 py-5 flex flex-col gap-7 bg-gray-900 border border-2 border-gray-500">
            <div className="flex flex-col ml-5 items-center gap-3">
              <div className="flex">
                <div className="w-12 h-12 mr-[-1.5rem] rounded-full bg-yellow-500"></div>
                <div className="w-12 h-12 rounded-full bg-purple-500"></div>
              </div>
              <h1 className="text-white text-2xl font-medium">
                Graphic Design
              </h1>
            </div>
            <ul className="w-full flex flex-col text-center items-center gap-3 px-5 font-semibold text-gray-400">
              <li>* Logo & Branding Design</li>
              <li>* Social Media Graphics & Banners</li>
              <li>* Print Design (Flyers, Brochures, Business Cards)</li>
              <li>* Web Design Mockups & Prototypes</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="projects"
        style={{ backgroundColor, text: textColor }}
        className="w-full p-10 flex items-center justify-center flex-col gap-5"
      >
        <button className="bg-purple-500 w-[150px] text-white rounded-3xl font-medium px-5 py-3">
          PROJECTS
        </button>
        <h1 className="text-3xl text-[#FFC41F] font-medium">
          Showcasing My Remarkable Projects
        </h1>
        <p className="md:mx-10 md:px-10 font-semibold text-gray-300 text-center">
          I’m here to help with the creative and technical aspects of your
          digital journey!
        </p>
        <div className="w-full flex flex-col gap-10 p-5">
        <div className="w-full flex md:flex-row flex-col border border-2">
            <div className="md:w-2/4">
              <img src={assets.project1} alt="" />
            </div>
            <div className="md:w-2/4 flex flex-col justify-center gap-5 p-5">
              <span className="text-2xl font-medium text-[#FFC41F]">Project 1</span>
              <a
                className="text-2xl md:text-5xl text-purple-500 font-medium"
                href="https://newel-remodelling-web1.vercel.app/"
              >
                RV Rentals Website
              </a>
              <a
                href="https://newel-remodelling-web1.vercel.app/"
                className="text-xl w-[200px] bg-white text-center py-3 px-2 border border-1 hover:bg-black hover:text-white duration-300"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col border border-2">
            <div className="md:w-2/4">
              <img src={assets.project2} alt="" />
            </div>
            <div className="md:w-2/4 flex flex-col justify-center gap-5 p-5">
              <span className="text-2xl font-medium text-[#FFC41F]">Project 2</span>
              <a
                className="text-2xl md:text-5xl text-purple-500 font-medium"
                href="https://rv-rentals-website-nn4k.vercel.app/"
              >
                RV Rentals Website
              </a>
              <a
                href="https://rv-rentals-website-nn4k.vercel.app/"
                className="text-xl w-[200px] bg-white text-center py-3 px-2 border border-1 hover:bg-black hover:text-white duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="bg-[#050C17] md:flex-row flex-col flex py-5 md:p-10">
      <div className="md:w-2/4 p-5 flex justify-center gap-10 flex-col">
        <h1 className="text-white text-3xl md:text-5xl font-semibold">Have a project in mind? Let’s get to work.</h1>
        <EmailButton/>
      </div>
      <div className="md:w-2/4">
        <img src={assets.contact_bg} alt="" />
      </div>
      </div>

    </div>
  );
};

export default Hero;
