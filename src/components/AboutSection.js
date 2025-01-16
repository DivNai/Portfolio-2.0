import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
    <div className="max-w-4xl w-full bg-gray-1000 p-8 rounded-lg shadow-lg"></div>
    <section className="mt-10 text-center px-4 ">
      <h2 className="mt-5 text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          About me
        </span>
      </h2>
      <div className="mt-4 text-lg max-w-5xl mx-auto">
        <p className="mt-4 text-lg text-center">
          My passion for development stems from an insatiable curiosity
          and a relentless drive to push the boundaries of knowledge and
          innovation. After immersing myself in the complexities of full-stack
          development, I have realized that my journey is far from over...
        </p>
      </div>
    </section>
    </section>
  );
};

export default AboutSection;
