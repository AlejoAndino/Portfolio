import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import chicCloset from "../../assets/ChicCloset.png";
import gameLibrary from "../../assets/GameLibrary.png";

function Projects() {
  const projectsData = [
    {
      image: chicCloset,
      projectName: "ChicCloset",
      projectLink: "https://chiccloset-service.web.app/",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "PokeApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: gameLibrary,
      projectName: "Game Library APP",
      projectLink: "https://deploy-videogames-eight.vercel.app/",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: gameLibrary,
      projectName: "PortFolio",
      projectLink: "https://deploy-videogames-eight.vercel.app/",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="text-light mx-20" id="work">
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 className="text-4xl mb-4 font-bold">
          Latest Proyects{" "}
          <span className="h-[1px] ml-2 w-[450px] inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
      </motion.div>

      <div className="m-11 flex flex-col gap-32">
        {projectsData.map(
          (
            {
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            },
            index
          ) => {
            const isInverted = index === 1;
            return (
              <motion.div
                className={`flex justify-center relative ${isInverted ? "flex-row-reverse" : "flex-row"}`}
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="relative">
                  <Image
                    className="h-[300px]"
                    width={600}
                    src={image}
                    alt={projectName}
                    quality={100}
                  />
                  <span className="bg-[#2057d8] bg-opacity-30 hover:bg-opacity-0 transition-all duration-500 absolute top-0 left-0 w-full h-full">&nbsp;</span>
                </div>

                <div className={`z-10 flex ${isInverted ? "items-start" : "items-end"} flex-col w-[650px] gap-2`}>
                  <p className="text-[#2095d8]">Featured Project</p>
                  <h3 className="text-4xl font-semibold">{projectName}</h3>
                  <div className="bg-[#101010] w-[750px] p-6">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="flex gap-8 my-3">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex gap-7">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub size={25} />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink size={25} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
