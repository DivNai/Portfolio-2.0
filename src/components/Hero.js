import React, { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "I'm Divyanshi Naithani, Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 45); // Adjust typing speed here (100ms per character)
    }
  }, [index, text, fullText]);

  return (
    <main className="flex flex-row items-center justify-center mt-10 px-5">
      {/* Left Section: Icons */}
      <div className="flex flex-col items-center mr-4">
        {/* Social Media Icons */}
        <div className="flex flex-col gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/DivNai"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="text-gray-400 group-hover:text-pink-500 transition">
              <i className="fab fa-github fa-lg"></i>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/divyanshi-naithani"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="text-gray-400 group-hover:text-pink-500 transition">
              <i className="fab fa-linkedin fa-lg"></i>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="text-gray-400 group-hover:text-pink-500 transition">
              <i className="fab fa-twitter fa-lg"></i>
            </div>
          </a>

          {/* Email */}
          <a
            href="naithani1604@gmail.com"
            className="group"
          >
            <div className="text-gray-400 group-hover:text-pink-500 transition">
              <i className="fas fa-envelope fa-lg"></i>
            </div>
          </a>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="w-1 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-4"></div>

      {/* Right Section: Profile Picture, Title, Description, and Buttons */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Picture */}
        <img
          src="./141929578.png"
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-gradient-to-r from-pink-500 to-orange-500"
        />

        {/* Title with Typewriter Effect */}
        <h1 className="mt-5 text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            {text}
          </span>
          <span className="blinking-cursor">|</span> {/* Blinking cursor */}
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg max-w-3xl">
          I'm Divyanshi, a dedicated full-stack developer with extensive
          experience in creating numerous websites. I am passionate about
          exploring and mastering new technologies to enhance my skills and stay
          ahead in the ever-evolving tech landscape.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-lg">
            Connect with me
          </button>
          <button className="border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
            My Resume
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;