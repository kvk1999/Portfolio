import React, { useState, useEffect } from "react";
import profileImage from "../assets/hero.jpg";
import resume from "../assets/resume.pdf";

export default function Home() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const typingEffect = setTimeout(() => {
        setDisplayedText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150); // Typing speed

      return () => clearTimeout(typingEffect); // Cleanup timeout
    } else {
      const resetEffect = setTimeout(() => {
        setDisplayedText(""); // Clear text after pause
        setCharIndex(0); // Reset character index
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length); // Move to the next role
      }, 2000); // Pause before clearing

      return () => clearTimeout(resetEffect); // Cleanup timeout
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex flex-col bg-bg">
      <div className="text-center">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-60 h-60 rounded-full mx-auto mb-4 mt-28 shadow-lg ring-2 ring-violet-800 dark:ring-violet-800
            transition duration-500 ease-in-out transform hover:scale-105"
        />

        {/* Name */}
        <h1
          className="text-7xl mt-5 font-oswald font-bold text-transparent bg-clip-text
          bg-gradient-to-r from-linear1 to-linear animate-pulse"
        >
          I'm Koushik K V
        </h1>

        {/* Typing Effect */}
        <h4
          className="text-4xl font-oswald font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-linear1 to-linear cursor-pointer"
        >
          {displayedText}
        </h4>

        {/* Description */}
        <p className="text-xl font-oswald px-8 lg:px-28 mx-auto mt-8 mb-4 text-white max-w-3xl">
          💡As a passionate Full Stack Developer, I enjoy solving complex problems 
          and creating seamless user experiences. Let's connect and explore the 
          limitless possibilities of coding! 🌐
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-8">
          <a
            href="#contact"
            className="mt-6 p-2 bg-gradient-to-r from-linear1 to-linear font-semibold text-white border rounded-full px-5 py-3 hover:scale-105 transition-transform duration-300"
          >
            Connect With Me...📧
          </a>
          <a
            href={resume}
            download
            className="mt-6 p-2 text-white border rounded-full px-5 py-3 hover:scale-105 transition-transform duration-300"
          >
            Resume📄
          </a>
        </div>
      </div>
    </section>
  );
}
