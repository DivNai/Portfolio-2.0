import React, { useState } from "react";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web design",
      description:
        "I create visually appealing, user-friendly, and responsive website designs that adapt seamlessly to all devices.",
      moreContent: "Additional details about web design services...",
    },
    {
      id: 2,
      title: "Graphics design",
      description:
        "From logos to banners, my designs cater to marketing, social media, and web needs, ensuring a consistent and impactful brand presence.",
      moreContent: "Additional details about graphics design services...",
    },
    {
      id: 3,
      title: "UI & UX",
      description:
        "I craft intuitive and interactive user interfaces and experiences that prioritize usability and customer satisfaction.",
      moreContent: "Additional details about UI & UX services...",
    },
    {
      id: 4,
      title: "App design",
      description: "My designs focus on creating engaging and functional mobile app experiences.",
      moreContent: "Additional details about app design services...",
    },
    {
      id: 5,
      title: "Front End Development",
      description:
        "I bring designs to life using modern front-end technologies, ensuring responsiveness and performance.",
      moreContent: "Additional details about front-end development services...",
    },
    {
      id: 6,
      title: "Content writing",
      description:
        "I create clear content for blogs, websites, or other platforms, tailored to attract and retain audiences.",
      moreContent: "Additional details about content writing services...",
    },
  ];

  const handleReadMore = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="Services-section">
    <div className="max-w-4xl w-full bg-gray-1000 p-8 rounded-lg shadow-lg"></div>
    <div className="min-h-screen bg-black text-white py-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        {services.map((service) => (
          <div
            key={service.id}
            className={`border border-gray-600 rounded-lg p-6 hover:border-pink-500 transition ${
              expandedService === service.id ? "h-auto" : "h-64"
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">{service.id < 10 ? `0${service.id}` : service.id}</span>{" "}
              {service.title}
            </h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            {expandedService === service.id && (
              <p className="text-gray-300 mb-4">{service.moreContent}</p>
            )}
            <button
              onClick={() => handleReadMore(service.id)}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center font-semibold hover:underline"
            >
              {expandedService === service.id ? "Read Less" : "Read More"} <span className="ml-2">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;