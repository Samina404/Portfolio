import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Sc in Computer Science",
    institute: "East Delta University",
    year: "Final Year, CGPA: 3.96/4.00",
  },
];

const experience = [
  {
    role: "Remote Intern",
    company: "Magenda Network",
    duration: "2024",
    details: "Worked on full-stack development tasks.",
  },
  {
    role: "EDU Computer Club Convener",
    company: "East Delta University",
    duration: "2023",
    details: "Led competitive programming events.",
  },
];

export default function Resume() {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Resume
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul className="space-y-2">
            {education.map((edu, idx) => (
              <li key={idx} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p className="text-gray-300">{edu.institute}</p>
                <p className="text-gray-400">{edu.year}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <ul className="space-y-2">
            {experience.map((exp, idx) => (
              <li key={idx} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h4 className="font-semibold">{exp.role}</h4>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.details}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
