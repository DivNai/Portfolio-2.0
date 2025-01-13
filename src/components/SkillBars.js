import React from "react";

const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "React JS", level: "80%" },
  { name: "JavaScript", level: "85%" },
  { name: "Next JS", level: "70%" },
  { name: "MongoDB & SQL", level: "75%" },
  { name: "Python", level: "75%" },
];

const SkillBars = () => {
  return (
    <section className="px-8 lg:px-24 py-8 ">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <p className="mb-2">{skill.name}</p>
          <div className="w-full bg-gray-700 h-2 rounded">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillBars;
