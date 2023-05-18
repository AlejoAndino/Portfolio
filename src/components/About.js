import Image from "next/image";
import React from "react";
import programming from "../assets/programming.jpg";
import spinner from "../assets/spinner.png";

const About = () => {
  return (
    <div className="text-light flex h-[70vh] justify-around items-center">
      <div className="flex items-center relative">
        <Image
          className="rounded-3xl"
          src={programming}
          alt="programming"
          width={"550"}
          height={"500"}
        />

        <Image
          className="absolute bg-dark -right-10 -bottom-10 rounded-full p-4 animate-spin"
          src={spinner}
          alt="spinner"
          width={"200"}
        />
      </div>

      <div className="w-[650px]">
        <h2 className="text-4xl mb-4 font-medium">
          About Me{" "}
          <span className="h-[1px] w-[450px] inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
        <h3 className="text-3xl mb-4 font-bold">
          A dedicated Full Stack Developer based in Cordoba, Argentina 📍
        </h3>
        <p className="my-4">
          As a Junior Full Stack Developer, I possess an impressive arsenal of
          skills. I excel in designing and maintaining responsive websites that
          offer a smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className="list-disc list-inside text-[#966fbe] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <li>React</li>
          <li>Redux</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>Redux Toolkit</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
