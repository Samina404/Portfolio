import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Cholokini E-commerce Website",
    description: "Full-stack project with real estate, electronics, footwear, and cosmetics. Features cart, order email, and reviews.",
    link: "#",
  },
  {
    title: "Sales Genius Dashboard",
    description: "Streamlit project for sales analysis with visualizations, product spike detection, and revenue forecasting.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather data and displays current time of searched city.",
    link: "#",
  },
  {
    title: "Jokes Generator",
    description: "JavaScript project generating random jokes on demand.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
