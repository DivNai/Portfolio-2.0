import React from "react";

const Stats = () => {
  return (
    <section className="flex justify-around px-8 lg:px-24 py-8 text-center">
      {/* Years of Experience */}
      <div>
        <h1 className="text-4xl font-bold text-pink-500">1+</h1>
        <p className="text-lg">Years of experience</p>
      </div>

      {/* Projects */}
      <div>
        <h1 className="text-4xl font-bold text-pink-500 orange-500">10+</h1>
        <p className="text-lg">Projects</p>
      </div>
    </section>
  );
};

export default Stats;
