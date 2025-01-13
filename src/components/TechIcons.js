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
    <div className="flex flex-wrap justify-center space-x-8 p-5">
      {/* React Icon */}
      <div className="flex flex-col items-center">
        <FaReact className="text-blue-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">React</p>
      </div>

      {/* Node.js Icon */}
      <div className="flex flex-col items-center">
        <FaNodeJs className="text-green-600 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">Node.js</p>
      </div>

      {/* HTML5 Icon */}
      <div className="flex flex-col items-center">
        <FaHtml5 className="text-orange-600 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">HTML5</p>
      </div>

      {/* CSS3 Icon */}
      <div className="flex flex-col items-center">
        <FaCss3Alt className="text-blue-600 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">CSS3</p>
      </div>

      {/* JavaScript Icon */}
      <div className="flex flex-col items-center">
        <FaJs className="text-yellow-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">JavaScript</p>
      </div>

      {/* Java Icon */}
      <div className="flex flex-col items-center">
        <FaJava className="text-red-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">Java</p>
      </div>

      {/* Python Icon */}
      <div className="flex flex-col items-center">
        <FaPython className="text-blue-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">Python</p>
      </div>

      {/* SQL Icon */}
      <div className="flex flex-col items-center">
        <FaDatabase className="text-blue-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">SQL</p>
      </div>

      {/* C++ Icon */}
      <div className="flex flex-col items-center">
        <SiCplusplus className="text-blue-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">C++</p>
      </div>

      {/* C Icon */}
      <div className="flex flex-col items-center">
        <SiC className="text-blue-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">C</p>
      </div>

      {/* Android Development Icon */}
      <div className="flex flex-col items-center">
        <FaAndroid className="text-green-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">Android Dev</p>
      </div>

      {/* AWS Icon */}
      <div className="flex flex-col items-center">
        <FaAws className="text-orange-500 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">AWS</p>
      </div>

      {/* Bootstrap Icon */}
      <div className="flex flex-col items-center">
        <FaBootstrap className="text-purple-600 text-6xl" />
        <p className="text-sm text-gray-700 mt-2">Bootstrap</p>
      </div>

      {/* Custom Placeholder for Spring Boot */}
      <div className="flex flex-col items-center">
        <div className="text-green-500 text-6xl">🌱</div> {/* Use a leaf emoji as a placeholder */}
        <p className="text-sm text-gray-700 mt-2">Spring Boot</p>
      </div>

      {/* Custom Placeholder for Agile */}
      <div className="flex flex-col items-center">
        <div className="text-yellow-500 text-6xl">⚡</div> {/* Use a lightning bolt emoji as a placeholder */}
        <p className="text-sm text-gray-700 mt-2">Agile</p>
      </div>

      {/* Custom Placeholder for Eclipse */}
      <div className="flex flex-col items-center">
        <div className="text-gray-700 text-6xl">🌕</div> {/* Use a moon emoji as a placeholder */}
        <p className="text-sm text-gray-700 mt-2">Eclipse</p>
      </div>
    </div>
  );
};

export default TechIcons;
