import React from "react";

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
    }
  ]

  return (
    <div className="text-light flex justify-center items-center h-[50vh]">
      <div>
        <h2 className="text-4xl mb-4 font-medium">
          Experience{" "}
          <span className="h-[1px] ml-6 w-[450px] inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Experience;
