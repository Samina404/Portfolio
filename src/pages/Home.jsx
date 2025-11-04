import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-10 bg-[#0f172a] overflow-hidden text-white">
      
      {/* Gradient Background Shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-green-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-400/20 rounded-full animate-pulse"></div>

      {/* Hero Content */}
      <motion.h2
        className="text-5xl font-extrabold mb-2 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Samina Rahman
      </motion.h2>

      <motion.h3
        className="text-3xl font-semibold mb-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m a{" "}
        <span className="text-green-400">
          <Typewriter
            words={["Full Stack Developer", "MERN Developer", "Web Developer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </motion.h3>

      <motion.p
        className="text-gray-400 max-w-2xl mb-8 leading-relaxed z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum eos.
        Iure incidunt excepturi totam aperiam, deserunt quidem obcaecati
        consectetur voluptatibus recusandae quasi sequi.
      </motion.p>

      <motion.div
        className="flex items-center space-x-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {/* Download CV Button */}
        <button className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition">
          Download CV
        </button>

        {/* GitHub & LinkedIn */}
        <div className="flex space-x-4 text-green-400 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
