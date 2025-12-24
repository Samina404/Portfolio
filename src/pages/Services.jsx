import React from "react";
import { motion } from "framer-motion";
import { Code, Monitor, Server, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-emerald-400" />,
    title: "Web Development",
    description: "Crafting visually stunning and high-performance websites. I focus on creating responsive interfaces that provide flawless user experiences across all devices.",
    features: ["Responsive Design", "Interactive UI/UX", "Performance Optimization", "Modern Frameworks"],
  },
  {
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    title: "Backend Development",
    description: "Building robust server-side applications that power your business logic. I ensure your data is secure, accessible, and handled efficiently.",
    features: ["RESTful API Design", "Database Management", "Authentication & Security", "Scalable Architecture"],
  },
  {
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    title: "Full Stack Solutions",
    description: "Delivering complete web applications from concept to deployment. I bridge the gap between frontend beauty and backend functionality.",
    features: ["End-to-End Development", "Third-party Integration", "Cloud Deployment", "Maintenance & Support"],
  },
];

export default function Services() {
  return (
    <section className="py-12 md:py-28 px-6 bg-slate-950 text-slate-200 flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I offer a comprehensive range of technical services to help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)] transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Hover Beam Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

              <div className="mb-6 p-3 rounded-xl bg-slate-900/80 w-fit border border-slate-800 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={18} className="text-emerald-500/80 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
