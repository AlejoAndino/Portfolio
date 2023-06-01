import Image from "next/image";
import React from "react";
import henrylogo from "../assets/Henrylogo.jpg";

const Experience = () => {
  const experiences = [
    {
      name: "ChicClo",
      role: "Teaching Assistant",
      url: "https://www.rapidops.com",
      start: "January 2023",
      end: "February 2023",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
  ];

  return (
    <div className="text-light mt-72 flex-col items-center justify-center h-[60vh]">
      <div className="flex justify-center mb-14">
        <h2 className="text-4xl font-bold">
          Experience{" "}
          <span className="h-[1px] ml-6 w-[450px] inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="flex bg-[#0b0a15] p-8">
          <div className="w-[150px] h-[150px] mx-5 mt-2">
            <Image src={henrylogo} alt="logo" />
          </div>

          <div>
            <h2 className="text-2xl font-medium">Teaching Assistant</h2>
            <p>Remote | 2022 - 2022</p>
            <ul className="list-disc list-inside">
              <li className="my-3">
                Coordinate a group of students to achieve integration into the
                study group.
              </li>
              <li className="my-3">Guide students in the first steps of the course.</li>
              <li className="my-3">
                Assist in the resolution of exercises and promote group
                collaboration (Pair Programming).
              </li>
              <li className="my-3">
                Proponer ideas para la mejora de los procesos del Bootcamp.
              </li>
            </ul>
          </div>

          <div>
            <p>Partial Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
