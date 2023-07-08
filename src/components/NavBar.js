import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const NavBar = () => {
  const router = useRouter();
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
            ease: 'easeInOut',
            delay: 0.5
          }}>
            <Link className="mr-6 relative group" href="/">
              Home{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === "/" ? "w-full" : "w-0"
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
            ease: 'easeInOut',
            delay: 0.7
          }}>
            <Link className="mr-6 relative group" href="/about">
              About{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === "/about" ? "w-full" : "w-0"
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
            ease: 'easeInOut',
            delay: 0.9
          }}>
            <Link className="mr-6 relative group" href="/projects">
              Projects{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === "/projects" ? "w-full" : "w-0"
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
            ease: 'easeInOut',
            delay: 1.1
          }}>
            <Link className="mr-6 relative group" href="/contact">
              Contact{" "}
              <span
                className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === "/contact" ? "w-full" : "w-0"
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
