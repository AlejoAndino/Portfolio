import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NavBar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");
  console.log(router);

  return (
    <header className="fixed z-40 w-full h-[120px] px-10 py-10 font-medium flex justify-between items-center bg-dark bg-opacity-40 backdrop-blur-sm">
      <motion.div
        className="brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <Image src={logo} height={"100"} width={"100"} alt="logo" />
      </motion.div>

      <nav className="text-light pr-10">
        <ul className="flex gap-9">
          <motion.li
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Link
              className="mr-6 relative group"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home").scrollIntoView({
                  behavior: "smooth",
                });
                setActiveButton("home");
              }}
            >
              Home{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  activeButton === "home" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <Link
              className="mr-6 relative group"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                });
                setActiveButton("about");
              }}
            >
              About{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  activeButton === "about" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.9,
            }}
          >
            <Link
              className="mr-6 relative group"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
                setActiveButton("projects");
              }}
            >
              Projects{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  activeButton === "projects" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 1.1,
            }}
          >
            <Link
              className="mr-6 relative group"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
                setActiveButton("contact");
              }}
            >
              Contact{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  activeButton === "contact" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
