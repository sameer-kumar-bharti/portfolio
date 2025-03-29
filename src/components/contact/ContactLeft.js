import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center overflow-auto">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sameer Kumar Bharti</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Specializing in the Php with expertise in Laravel. Skilled in building web applications, optimizing code, and ensuring seamless user experiences.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9792948265</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sameerkumarbharti961@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/sameer-bharti" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/sameer-kumar-bharti" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
