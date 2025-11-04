import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    description: "Building responsive and modern websites using React, Node.js, and Tailwind CSS.",
  },
  {
    icon: <Server className="w-8 h-8 text-green-400" />,
    title: "Backend Development",
    description: "Creating secure and scalable backend APIs using Node.js and Express.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    title: "Full Stack Projects",
    description: "Integrating frontend and backend for complete full-stack applications.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:bg-gray-700 transition-colors text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
