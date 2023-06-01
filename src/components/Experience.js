import Image from "next/image";
import React from "react";
import { useRef } from "react";
import henrylogo from "../assets/Henrylogo.jpg";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="text-light relative mt-72 flex-col items-center justify-center h-[60vh]">
      <div className="flex justify-center mb-14">
        <h2 className="text-4xl font-bold">
          Experience{" "}
          <span className="h-[1px] ml-6 w-[450px] inline-block bg-light relative top-5 group-hover:w-full transition-[width] ease duration-300">
            &nbsp;
          </span>
        </h2>
      </div>

      <div ref={ref} className="flex justify-center relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-40 top-0 w-[4px] bg-[#2095d8] h-full origin-top"
        >
          <div className="w-full h-full bg-gradient-to-b from-[#ffd500] opacity-75"></div>
        </motion.div>

        <div className="flex bg-[#0b0a15] p-8">
          <div className="w-[150px] h-[150px] mx-5 mt-2">
            <Image src={henrylogo} alt="logo" /> 
          </div>

          <div>
            <h2 className="text-2xl font-medium">Teaching Assistant</h2>
            <p>Remote | 2023 - 2023</p>
            <ul className="list-disc list-inside">
              <li className="my-3">
                Coordinate a group of students to achieve integration into the
                study group.
              </li>
              <li className="my-3">
                Guide students in the first steps of the course.
              </li>
              <li className="my-3">
                Assist in the resolution of exercises and promote group
                collaboration (Pair Programming).
              </li>
              <li className="my-3">
                Propose ideas to improve the Bootcamp processes.
              </li>
            </ul>
          </div>

          <div>
            <p className="bg-[#2095d8] rounded-sm p-2 text-black font-bold">
              Partial Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
