import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const menuOptions = [
  { id: "home", label: "Home", href: "/", delay: 0.5 },
  { id: "about", label: "About", href: "#about", delay: 0.7 },
  { id: "projects", label: "Projects", href: "#projects", delay: 0.9 },
  { id: "experience", label: 'Experiencie', href: '#experience', delay: 1.1},
  { id: "contact", label: "Contact", href: "#contact", delay: 1.3 },
];

const NavBar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setActiveButton(id);
  };

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
        <Image src={logo} height={100} width={100} alt="logo" />
      </motion.div>

      <nav className="text-light pr-10">
        <ul className="flex gap-9">
          {menuOptions.map(({ id, label, href, delay }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay,
              }}
            >
              <Link
                className="mr-6 relative group"
                href={href}
                onClick={(e) => handleMenuClick(e, id)}
              >
                {label}{" "}
                <span
                  className={`h-[2px] inline-block bg-[#2057d8] absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                    activeButton === id ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;