import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa"; // Added FaReact
import {  SiMongodb, SiExpress, SiHtml5, SiCss3, SiPostman,SiLaravel, SiPhp,SiCodeigniter, SiJquery } from "react-icons/si"; // Kept all skills

const Media = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between mt-8">
      <div className='mr-6'>
        <h2 className="text-sm md:text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon rounded-full p-3 bg-[#1e2024] shadow-md hover:scale-105 transition-transform">
            <a
              href="https://linkedin.com/in/sameer-bharti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-sm md:text-base uppercase font-titleFont mb-4">
          Best Skills In
        </h2>
        <div className="flex gap-4 flex-wrap">
          {[SiLaravel, SiPhp, SiCodeigniter, SiJquery,FaReact, FaNodeJs, SiMongodb, SiExpress, SiHtml5, SiCss3, SiPostman].map((Icon, index) => (
            <span key={index} className="bannerIcon rounded-full p-3 bg-[#1e2024] shadow-md hover:scale-105 transition-transform">
              <Icon className="text-white" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
