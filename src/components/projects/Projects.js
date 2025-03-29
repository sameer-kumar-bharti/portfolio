import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix,projectSeven,projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Metro Shoes"
          des="Developed a fully functional eCommerce platform that allows users to browse products, add items to the cart, and complete purchases seamlessly. The website features a modern, secure authentication, and an intuitive user experience."
          src={projectOne}
        />
        <ProjectsCard
          title="Mochi Shoes"
          des="Developed a fully functional eCommerce platform that allows users to browse products, add items to the cart, and complete purchases seamlessly. The website features a modern, secure authentication, and an intuitive user experience."
          src={projectTwo}
        />
        <ProjectsCard
          title="Fitflop"
          des="Developed a fully functional eCommerce platform that allows users to browse products, add items to the cart, and complete purchases seamlessly. The website features a modern, secure authentication, and an intuitive user experience."
          src={projectThree}
        />
        <ProjectsCard
          title="Walkway Shoes"
          des="Developed a fully functional eCommerce platform that allows users to browse products, add items to the cart, and complete purchases seamlessly. The website features a modern, secure authentication, and an intuitive user experience."
          src={projectFour}
        />
        <ProjectsCard
          title="My Biofoot"
          des="Developed a fully functional eCommerce platform that allows users to browse products, add items to the cart, and complete purchases seamlessly. The website features a modern, secure authentication, and an intuitive user experience."
          src={projectFive }
        />
        <ProjectsCard
          title="Blog"
          des="A dynamic and engaging blog platform designed for seamless content creation and user interaction. Features include a modern UI, responsive design, category-based filtering, rich text editing, and SEO optimization. Built with [mention technologies like Html,Css,Laravel, Bootstrap,Jquery, etc.], ensuring high performance and scalability."
          src={projectSix}
        />
        <ProjectsCard
          title="Civil guruji"
          des="Developed a feature-rich Learning Management System (LMS) designed to facilitate online education and training. The platform includes user-friendly course management, interactive quizzes, progress tracking, and role-based access for administrators, instructors, and students.Built using [mention tech stack, e.g., Laravel, Php, Mysql], the LMS ensures a seamless and scalable e-learning experience."
          src={projectSeven}
        />
        <ProjectsCard
          title="Vivahadda"
          des="Developed a feature-rich matrimonial platform designed to connect individuals based on their preferences, cultural backgrounds, and values. The project includes user authentication, profile matching algorithms, real-time chat, and privacy controls."
          src={projectEight}
        />
      </div>
    </section>
  );
}

export default Projects;
