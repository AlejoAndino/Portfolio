import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../assets/GameLibrary.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen pt-24 p-4 md:pt-0">
      <div className="max-w-[1240px] m-auto px-2 w-full md:flex md:flex-col md:justify-end md:h-screen">
        <div>
          <p className="text-xl tracking-widest uppercase text-[#2057d8] font-bold">
            Contact
          </p>
          <h2 className="py-4 text-light font-semibold">Get In Touch</h2>
        </div>
        <div className="grid lg:grid-cols-1 gap-8 lg:gap-0 lg:flex lg:justify-center md:h-[750px]">
          {/* left */}
          <div className="lg:max-w-[600px] w-full h-auto shadow-xl shadow-blue-500 rounded-xl p-4 text-light">
            <div className="lg:p-4 h-full ">
              <div>
                <div className="col-12">
                  <div className="google-map">
                    <div className="embed-responsive embed-responsive-21by9">
                      <iframe
                        className="embed-responsive-item w-full h-[250px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899067316!2d-64.27661234475407!3d-31.399280323158536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmE!5e0!3m2!1ses!2sar!4v1684962497876!5m2!1ses!2sar"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="py-2">Alejo Andino</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 font-semibold text-center">
                  Connect With Me
                </p>
                <div className="flex items-center justify-around py-4">
                  <a
                    href="https://www.linkedin.com/in/alejoandino/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/alejoandino"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="lg:max-w-[600px] w-full h-auto shadow-xl shadow-blue-500 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/6be128ae-91a1-489a-8e37-30bdede0447e"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-semibold text-light">
                      Name
                    </label>
                    <input
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" font-semibold uppercase text-sm py-2 text-light">
                      Phone Number
                    </label>
                    <input
                      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light font-semibold">
                    Email
                  </label>
                  <input
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    type="email"
                    name="email"
                    placeholder="example@google.com"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light font-semibold">
                    Subject
                  </label>
                  <input
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 text-light font-semibold">
                    Message
                  </label>
                  <textarea
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    rows="10"
                    name="message"
                    placeholder="Let's talk about..."
                  ></textarea>
                </div>
                <button className="w-full bg-[#2057d8] rounded-xl p-4 text-gray-100 mt-4 font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-7">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#2057d8]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
