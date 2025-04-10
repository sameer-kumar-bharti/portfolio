import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend Skills",
    items: [
      { skill: "HTML", level: "Expert" },
      { skill: "CSS", level: "Expert" },
      { skill: "Bootstrap", level: "Expert" },
      { skill: "JavaScript", level: "Expert" },
      { skill: "Jquery", level: "Expert" },
      { skill: "React.js", level: "Intermediate" },
    ],
  },
  {
    category: "Backend Skills",
    items: [
      { skill: "Php", level: "Expert" },
      { skill: "Laravel", level: "Expert" },
      { skill: "Codeigniter", level: "Expert" },
      { skill: "MySQL", level: "Expert" },
      { skill: "SQL", level: "Expert" },
      { skill: "Node.js", level: "Intermediate" },
      { skill: "Express.js", level: "Intermediate" },
      { skill: "MongoDB", level: "Beginner" },
      
      
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { skill: "Git", level: "Advanced" },
      { skill: "Postman", level: "Intermediate" },
      { skill: "Razorpay Integration", level: "Expert" },
      { skill: "Burp suite", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20 text-white"
    >
      {skills.map((section, idx) => (
        <div key={idx} className="w-full">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-gray-400 tracking-[4px] uppercase">
              {section.category}
            </p>
            <h4 className="text-2xl md:text-4xl font-bold text-white">{section.category}</h4>
          </div>
          <div className="flex flex-col gap-6">
            {section.items.map((item, i) => (
              <div key={i} className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium text-gray-300">{item.skill}</p>
                <span className="w-full h-2 bg-gray-600 rounded-md inline-flex mt-2 relative">
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: item.level === "Expert" ? "90%" : item.level === "Advanced" ? "75%" : "60%" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-md"
                  />
                  <span className="absolute text-xs right-2 top-[-18px] text-gray-400">{item.level}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
