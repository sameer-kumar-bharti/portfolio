import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-20"
    >
      {/* Job Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="GreenHonchos Solutions Pvt. Ltd. (Jul 2023 – Present)"
            result="Noida"
            des="Developer with expertise in PHP, Laravel, JavaScript, jQuery, MySQL, HTML, CSS, APIs, Bootstrap, Git, Postman and AJAX. Skilled in developing dynamic web applications, optimizing database performance, and integrating third-party APIs. Proficient in front-end and back-end development, ensuring responsive and user-friendly designs. Basic knowledge of React.js, Node.js and Express.js, with a keen interest in expanding expertise in modern frameworks. Passionate about writing clean, efficient code and solving complex problems to deliver high-quality software solutions."
          />
          <ResumeCard
            title="Software Developer"
            subTitle="Softfix Technologies OPC Private Limited (Jul 2021 – Jun 2023)"
            result="Lucknow"
            des="Passionate and detail-oriented Developer with experience in developing dynamic web applications using PHP and Laravel. Skilled in front-end and back-end development, with expertise in JavaScript, jQuery, AJAX, HTML, CSS, Git, Postman and Bootstrap. Proficient in MySQL database management and API integrations to create scalable and efficient applications. Adept at troubleshooting, optimizing performance, and implementing secure coding practices. Enthusiastic about learning new technologies and delivering high-quality software solutions."
          />
        </div>
      </div>

      {/* Training Experience Section */}
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2021</p>
          <h2 className="text-4xl font-bold">Training Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Softfix Technologies OPC Private Limited · Internship"
            result="Lucknow"
            des="Completed a 4-month backend parts internship at Softfix Technologies OPC Private Limited, honing skills in modern web development technologies such as HTML, CSS, JavaScript, and backend technologies Php, Laravel. Gained valuable experience contributing to dynamic projects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
