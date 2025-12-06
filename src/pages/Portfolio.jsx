  import React from "react";
  import { motion } from "framer-motion";
  import { ExternalLink, Github, Layers } from "lucide-react";

  const projects = [
    {
      title: "Kinbo Ekhaney Shop",
      tech: "Node.js • React • MySQL • Express",
      description:
        "A full-stack e-commerce platform featuring category-based product listings, secure ordering, and automated email confirmations. Includes a comprehensive admin panel for product and order management.",
      links: [
        { label: "Admin Panel", url: "https://admin.kinboekhaney.com/", icon: <ExternalLink size={16} /> },
        { label: "Preview", url: "https://shop.kinboekhaney.com/", icon: <ExternalLink size={16} /> },
      ],
    },
    {
      title: "Don’tWorry (Wellness App)",
      tech: "Next.js • PostgreSQL • Tailwind • Node.js",
      description:
        "A wellness application for mood tracking and reflection. Features Supabase authentication, mood-based movie recommendations, and a custom music player with YouTube-style fetch logic.",
      links: [
              { label: "GitHub", url: "https://github.com/Samina404/Dont_worry.git", icon: <Github size={16} /> },

        { label: "Live Preview", url: "https://dont-worry-web.vercel.app/", icon: <ExternalLink size={16} /> },
  ],
    },
    {
      title: "Star Movie",
      tech: "React • Node.js • MongoDB • Express",
      description:
        "MERN stack movie booking platform with seat selection, secure payments, and user authentication. Includes an admin dashboard for managing movies and bookings.",
      links: [
        { label: "GitHub", url: "https://github.com/Samina404/cineplex.git", icon: <Github size={16} /> },
        { label: "Live Preview", url: "https://cineplex-three.vercel.app/", icon: <ExternalLink size={16} /> },
      ],
    },
    {
      title: "Savor (Food Ordering)",
      tech: "React • Node.js • MongoDB • Express",
      description:
        "Full-stack food ordering app with role-based access control, secure checkout, and real-time cart updates. Features an admin dashboard for restaurant management and RESTful APIs for efficient data handling.",
      links: [
        { label: "GitHub", url: "https://github.com/Samina404/Demo.git", icon: <Github size={16} /> },
        { label: "Preview", url: "https://demo-five-green-78.vercel.app/", icon: <ExternalLink size={16} /> },
      ],
    },
  ];

  export default function Portfolio() {
    return (
      <section className="min-h-screen px-6 py-20 bg-slate-950 text-slate-200">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured Projects 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="glass-card rounded-xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] transition-all duration-300 flex flex-col h-full group relative hover:z-10"
            >
              {/* Hover Beam Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={20} />
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-xs font-mono text-emerald-400 mb-4 bg-emerald-500/10 py-1 px-2 rounded w-fit border border-emerald-500/20">
                  {project.tech}
                </p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800 group-hover:border-slate-700 transition-colors">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </section>
    );
  }
