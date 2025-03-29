import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 px-8 lg:px-20" // Added px-8 for mobile and lg:px-20 for larger screens
    >
      {/* Part One: Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-red-100 tracking-[4px]">2010 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">EDUCATION</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.C.A. in Computer Application"
            subTitle="Babasaheb Bhimrao Ambedkar University, Lucknow (Jul 2018 – Jun 2021)"
            result="GPA:7.1/10"
            des="During my master's program, I deepened my knowledge in advanced topics like data structures, algorithms, and software development methodologies. This course provided me with a strong foundation in back-end development, including hands-on experience in back-end technologies like Php, Laravel, and Mysql. My final project, a waste online doctor appointment system built with Php, Laravel, showcased my ability to develop scalable web applications."
          />
          <ResumeCard
            title="B.C.A. in Computer Application"
            subTitle="Makhanlal Chaturvedi Rashtriya Patrakarita University, Bhopal  (May 2014 – June 2017)"
            result="Percent: 63/100"
            des="This bachelor's degree helped me develop a solid grounding in computer programming and web technologies. I gained proficiency in php, JavaScript, HTML5, CSS3, and SQL, which form the backbone of my web development skills today. My coursework and projects fostered a passion for problem-solving and creating efficient applications, laying the foundation for my expertise in both front-end and back-end development."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="P I C Inter College dumariagunj, SIDDHARATH NAGAR (2012 - 2014)"
            result="Percent: 69/100"
            des="In my secondary education, I specialized in Mathematics, Physics, and Chemistry, which honed my analytical and problem-solving skills. This foundation in logical thinking and complex problem-solving has greatly contributed to my approach in coding and software development, enabling me to break down complex challenges in programming and efficiently develop solutions."
          />
           <ResumeCard
            title="High School Education"
            subTitle="Rashtriya I C Turkaulia, SIDDHARATH NAGAR (2010 - 2012)"
            result="Percent: 78/100"
            des="In my 10th grade, I focused on a Science specialization, which developed my interest in technology and engineering. This initial exposure to the principles of physics, chemistry, and biology laid the groundwork for my curiosity in computers and software."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
