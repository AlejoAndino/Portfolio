import Image from "next/image";
import React from "react";
import programming from "../assets/programming.jpg";
import spinner from "../assets/spinner.png";
import colorSharp from '../assets/color-sharp.png';

const About = () => {
  return (
    <div
      id="about"
      className="text-light flex flex-col p-4 md:flex-row md:h-screen justify-around items-center bg-cover bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${colorSharp.src})`
      // }}
    >
      <div className="flex items-center relative mb-6 md:mb-0">
        <Image
          className="rounded-3xl w-full"
          src={programming}
          alt="programming"
          width={550}
          height={500}
        />

        <Image
          className="absolute w-[150px] bg-dark -right-10 -bottom-10 md:w-[200px] rounded-full p-4 animate-spin"
          src={spinner}
          alt="spinner"
          // width={150}
        />
      </div>

      <div className="w-full md:w-[700px]">
        <h2 className="text-[33px] text-center mb-4 font-bold">
          About Me{" "}
          <span className="h-[1px] w-full md:w-full inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
        <h3 className="text-2xl mb-4 font-bold">
          A dedicated Full Stack Developer based in Cordoba, Argentina 📍
        </h3>
        <p className="my-4 text-sm font-semibold">
          As a Junior Full Stack Developer, I possess an impressive arsenal of
          skills. I excel in designing and maintaining responsive websites that
          offer a smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
        <p className="font-semibold">Here are a few technologies I’ve been working with recently:</p>
        <ul className="list-disc list-inside text-[#2095d8] mt-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
