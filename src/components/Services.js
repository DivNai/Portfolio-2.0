import React, { useState } from "react";

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web design",
      description:
        "Crafting visually stunning and user-friendly websites that blend aesthetics with functionality. I specialize in creating responsive designs tailored to deliver seamless user experiences across all devices.",
      moreContent:
        "My focus is on responsive design, ensuring that your website looks and functions perfectly across desktops, tablets, and mobile devices. Whether it’s a personal portfolio, an e-commerce platform, or a business site, I bring your vision to life with precision and creativity.",
    },
    {
      id: 2,
      title: "Graphics design",
      description:
        "Bringing ideas to life with impactful visual storytelling. I design creative assets such as logos, banners, illustrations, and marketing materials that captivate audiences and elevate brands.",
      moreContent: "From concept to execution, I bring ideas to life with bold colors, striking typography, and innovative layouts. My expertise includes branding, poster design, social media graphics, and much more, tailored to reflect your unique style and message.",
    },
    {
      id: 3,
      title: "UI & UX",
      description:
        "Designing intuitive interfaces that prioritize user experience and accessibility. I focus on creating layouts that are not only visually appealing but also ensure smooth navigation and user satisfaction.",
      moreContent: "I design intuitive interfaces that guide users effortlessly, focusing on usability, accessibility, and aesthetics. My process includes user research, wireframing, prototyping, and user testing to ensure the final product meets both business goals and user needs.",
    },
    {
      id: 4,
      title: "App design",
      description: "Designing sleek and innovative mobile and web app interfaces that focus on functionality, interactivity, and a user-centric approach to drive engagement and usability.",
      moreContent: " My approach involves understanding your target audience and their needs, then crafting app designs that enhance usability while aligning with your brand identity.Whether it’s a native app or a web application, I focus on usability, aesthetics, and performance.",
    },
    {
      id: 5,
      title: "Front End Development",
      description:
        "Building responsive and dynamic web applications using modern tools and technologies. I turn creative designs into functional interfaces, ensuring pixel-perfect implementation and performance optimization.",
      moreContent: "I turn creative concepts into fully functional websites and applications. Using modern technologies like HTML, CSS, JavaScript, and frameworks like React, I build responsive and interactive interfaces that deliver exceptional user experiences. I prioritize clean code, performance optimization, and cross-browser compatibility, ensuring your website runs smoothly across all platforms. ",
    },
    {
      id: 6,
      title: "Content writing",
      description:
        "Creating compelling and engaging content tailored to your audience. From blog posts to website copy, I focus on delivering clear, impactful, and SEO-friendly writing to enhance your brand's online presence.",
      moreContent: "I focus on delivering clear, compelling,content that resonates with your audience. My writing style is adaptable, allowing me to cater to a wide range of industries and target markets. ",
    },
  ];

  const handleReadMore = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section id="services" className="Services-section min-h-screen bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Services
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border border-gray-600 rounded-lg p-6 hover:border-pink-500 transition ${
                expandedService === service.id ? "h-auto" : "h-64 overflow-hidden"
              }`}
            >
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                  {service.id < 10 ?'0${service.id}': service.id}</span>{" "}
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
                {expandedService === service.id ? "Read Less" : "Read More"}{" "}
                <span className="ml-2">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;