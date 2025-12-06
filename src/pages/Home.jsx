import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-slate-950 overflow-hidden text-white">
      
      {/* Background Gradient Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Content */}
      <div className="z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span className="text-gradient">Samina Rahman</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-medium text-slate-300 mb-8 h-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typewriter
            words={["Full Stack Developer", "MERN Stack Expert", "FRONTEND Developer"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Aspiring Full Stack Developer with hands-on experience building and deploying responsive web applications using React, Node.js, Next.js, and MongoDB. Passionate about creating innovative software solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a 
            href="/resume.pdf" 
            download="Samina_Rahman_Resume.pdf"
            className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            <FileText size={20} />
            View CV
          </a>

          <div className="flex gap-4 sm:ml-4">
            <a
              href="https://github.com/Samina404/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/samina-rahman-5a25281b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
