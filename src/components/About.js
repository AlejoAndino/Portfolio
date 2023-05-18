import Image from "next/image";
import React from "react";
import programming from "../assets/programming.jpg";

const About = () => {
  return (
    <div className="text-light flex h-[50vh] justify-around">
      <div>
        <Image
          className="rounded-3xl"
          src={programming}
          alt="programming"
          width={"500"}
          height={'500'}
        />
      </div>

      <div className="w-[650px]">
        <h2>About Me</h2>
        <h3>A dedicated Full Stack Developer based in Cordoba, Argentina 📍</h3>
        <p>
          As a Junior Full Stack Developer, I possess an impressive arsenal of
          skills. I excel in designing and maintaining responsive websites that
          offer a smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques. I am also a
          team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className="list-disc list-inside">
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
