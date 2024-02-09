import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const menuOptions = [
  { id: "home", label: "Home", href: "/", delay: 0.5 },
  { id: "about", label: "About", href: "#about", delay: 0.7 },
  { id: "projects", label: "Projects", href: "#projects", delay: 0.9 },
  { id: "experience", label: 'Experience', href: '#experience', delay: 1.1 },
  { id: "contact", label: "Contact", href: "#contact", delay: 1.3 },
];

const NavBar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
    setActiveButton(id);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed z-40 w-full md:h-[110px] px-10 py-5 font-medium flex justify-between items-center bg-dark bg-opacity-40 backdrop-blur-sm">
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
        <ul className={`flex ${menuOpen ? "flex-col items-center" : "hidden"} md:flex md:gap-9`}>
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
                className="mr-6 md:mr-0 md:mb-2 relative group"
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

      <button
        className="md:hidden text-light focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoClose size={30}/> : <IoMenu size={30}/>}
      </button>
    </header>
  );
};

export default NavBar;