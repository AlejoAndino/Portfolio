import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import chicCloset from "../../assets/ChicCloset.png";
import gameLibrary from "../../assets/GameLibrary.png";
import portafolio from "../../assets/Portafolio.png";
import colorSharp from '../../assets/color-sharp-fotor-invertido.png'

function Projects() {
  const projectsData = [
    {
      image: chicCloset,
      projectName: "ChicCloset",
      projectLink: "https://chiccloset-service.web.app/",
      projectDescription:
        "This project is a clothing E-Commerce developed under SCRUM methodologies. Allows users to buy quality products with Mercado Pago and leave reviews. Administrators manage inventory from a CMS. The objective is to offer an agile and safe purchasing experience.",
      projectTech: [
        "Javascript",
        "React",
        "Redux",
        "Tailwind CSS",
        "MongoDB",
        "Express",
        "Google Login",
        "Mercado Pago",
        "Cloudinary",
        "Auth0",
        "Material-UI",
      ],
      projectExternalLinks: {
        github: "https://github.com/AlejoAndino/ChicCloset",
        externalLink: "https://chiccloset-service.web.app/",
      },
    },
    {
      image: gameLibrary,
      projectName: "Game Library APP",
      projectLink: "https://deploy-videogames-eight.vercel.app/",
      projectDescription:
        "It is a video game library that uses the rawg.io API as an external API. Developed with Node.js, Express.js and SQL with PostgreSQL as back-end and database technologies, and Sequelize as ORM. For the front-end, the application was developed using the React JavaScript library, along with Redux, as the global state manager. The styling was achieved with pure CSS.",
      projectTech: [
        "React",
        "SQL",
        "Redux",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS Modules",
        "Sequelize",
        "PostgreSQL",
        "External API",
      ],
      projectExternalLinks: {
        github: "https://github.com/AlejoAndino/deploy-Videogames",
        externalLink: "https://deploy-videogames-eight.vercel.app/",
      },
    },
    {
      image: portafolio,
      projectName: "PortFolio",
      projectLink: "https://portfolio-theta-one-33.vercel.app/",
      projectDescription:
        "It is a SPA from my portfolio, I carried out this project with Next.js from React, it uses Framer Motion for advanced animations, it was styled with Tailwind CSS for greater agility and complexity of the components, the project was deployed in Vercel. It is a Front End project. I learned a lot by doing it",
      projectTech: [
        "React",
        "Next.js",
        "Vercel",
        "Tailwind CSS",
        "Framer Motion",
      ],
      projectExternalLinks: {
        github: "https://github.com/AlejoAndino/Portfolio",
        externalLink: "https://portfolio-theta-one-33.vercel.app/",
      },
    },
  ];

  return (
    <div
      className="text-light mx-4 md:mx-0 md:h-full bg-cover bg-no-repeat pt-20 md:pt-0"
      id="projects"
      // style={{
      //   backgroundImage: `url(${colorSharp.src})`,
      // }}
    >
      <motion.div
        className="flex justify-center md:pt-36 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2 className="text-4xl font-bold w-full text-center">
          Latest Projects{" "}
          <span className="h-[1px] md:ml-2 md:w-[450px] w-full inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
      </motion.div>

      <div className="m-6 md:m-11 md:h-full md:mx-20 flex flex-col gap-16 md:gap-32">
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
                className={`flex flex-col md:flex-row ${
                  isInverted ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 250 },
                }}
              >
                <div className="relative w-full md:w-fit md:h-fit md:mx-10">
                  <Image
                    className="rounded-xl"
                    width={600}
                    src={image}
                    alt={projectName}
                    quality={100}
                  />
                  <span className="bg-[#7f1ee7] md:w-full rounded-xl bg-opacity-30 hover:bg-opacity-0 transition-all duration-500 absolute top-0 left-0 w-full h-full">
                    &nbsp;
                  </span>
                </div>

                <div className="z-10 flex flex-col md:w-1/2 justify-between">
                  <div>
                    <p className="text-[#2095d8]">Featured Project</p>
                    <h3 className="text-4xl font-semibold">{projectName}</h3>
                    <div className="bg-[#101010] p-6 mt-4 md:mt-0">
                      <p>{projectDescription}</p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-wrap mt-4 md:mt-8">
                    {projectTech.map((tech) => (
                      <span
                        className="px-3 py-1 bg-gray-800 rounded-lg text-white mr-2 mb-2"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex mt-4 md:mt-8">
                    <Link
                      target="_blank"
                      href={projectExternalLinks.github}
                      className="mr-4"
                    >
                      <FiGithub size={25} />
                    </Link>
                    <Link
                      target="_blank"
                      href={projectExternalLinks.externalLink}
                    >
                      <FiExternalLink size={25} />
                    </Link>
                  </div>
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
