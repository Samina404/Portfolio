import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Database, Wrench } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institute: "East Delta University",
    year: "Jan 2022 – Jan 2026 (Expected)",
  },
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Kinbo Ekhaney (E-commerce)",
    duration: "Dec 2024 - Oct 2025",
    details: [
      "Built a full-stack e-commerce platform using React and Node.js.",
      "Developed internal tools for product and order management.",
      "Improved platform metrics: 1,000+ monthly users, 30% sales growth.",
      "Applied Google Analytics to optimize user experience.",
    ],
  },
];

const skills = {
  Languages: ["JavaScript", "C++", "JAVA", "Python"],
  Frameworks: ["React", "Node.js", "Next.js", "Express.js", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Render", "Railway"],
};

export default function Resume() {
  return (
    <section className="py-12 md:py-28 px-6 bg-slate-950 text-slate-200">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
  

        <div className="flex flex-col gap-16 max-w-4xl mx-auto mb-20">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-emerald-400 font-medium mb-1">{edu.institute}</p>
                  <p className="text-slate-500 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-emerald-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950"></div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-emerald-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-slate-500 text-sm mb-4">{exp.duration}</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400 text-sm leading-relaxed">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Code className="text-emerald-400" size={28} />
            <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover:border-emerald-500/30 transition-colors">
                <h4 className="text-lg font-semibold mb-4 text-emerald-300">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
