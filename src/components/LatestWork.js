import React from "react";

const LatestWork = () => {
  const projects = [
    {
      id: 1,
      image: "./Project 1.png", // Replace with your project image
      title: "Project 1",
      link: "https://example.com/project1", // Replace with your project link
    },
    {
      id: 2,
      image: "./Project 2.png", // Replace with your project image
      title: "Project 2",
      link: "https://github.com/s4bbi/spandan-3.0", // Replace with your project link
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150", // Replace with your project image
      title: "Project 3",
      link: "https://github.com/DivNai/Real-Time-Voice-Translator", // Replace with your project link
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150", // Replace with your project image
      title: "Project 4",
      link: "https://example.com/project4", // Replace with your project link
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150", // Replace with your project image
      title: "Project 5",
      link: "https://example.com/project5", // Replace with your project link
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150", // Replace with your project image
      title: "Project 6",
      link: "https://example.com/project6", // Replace with your project link
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Latest work</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg overflow-hidden border border-gray-600 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 transition group"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-40"></div>
            </div>            {/* Show Project Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-40">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Visit Project
              </a>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;