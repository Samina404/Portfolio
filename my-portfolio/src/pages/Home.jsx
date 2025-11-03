import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="bg-[#0f172a] min-h-screen text-white flex flex-col justify-center items-start px-10">
      <h2 className="text-5xl font-extrabold mb-2">Samina Rahman</h2>
      <h3 className="text-3xl font-semibold mb-4">
        I’m a{" "}
        <span className="text-green-400">
        <Typewriter
  words={[
    "Full Stack Developer",
    "MERN Developer",
    "Web Developer",
  ]}
  loop
  cursor
  cursorStyle="|"
  typeSpeed={80}
  deleteSpeed={50}
  delaySpeed={1500}
/>

        </span>
      </h3>
      <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cum eos.
        Iure incidunt excepturi totam aperiam, deserunt quidem obcaecati
        consectetur voluptatibus recusandae quasi sequi.
      </p>

      <div className="flex items-center space-x-6">
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
</div>
    </section>
  );
}
