import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaJs, 
  FaPython, 
  FaAndroid, 
  FaCss3Alt, 
  FaJava, 
  FaDatabase, 
  FaAws, 
  FaBootstrap 
} from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';

const TechIcons = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      {/* First line of icons */}
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-x-8 md:space-y-0 mb-8">
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-600 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-600 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-blue-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <FaAndroid className="text-green-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">Android Dev</p>
        </div>
      </div>

      {/* Second line of icons */}
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4 md:space-x-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="text-red-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-blue-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiCplusplus className="text-blue-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">C++</p>
        </div>
        <div className="flex flex-col items-center">
          <SiC className="text-blue-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">C</p>
        </div>
        <div className="flex flex-col items-center">
          <FaAws className="text-orange-500 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-purple-600 text-4xl md:text-6xl" />
          <p className="text-sm text-gray-700 mt-2">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default TechIcons;