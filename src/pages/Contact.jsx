import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get in Touch 
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          I’m currently open to new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <div className="glass-card p-6 md:p-8 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="flex flex-col gap-6 items-center">
            
            <a href="mailto:saminarahman404@gmail.com" className="group flex items-center gap-4 p-4 w-full max-w-md rounded-xl bg-slate-900/50 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="p-3 rounded-full bg-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Me</p>
                <p className="text-slate-200 font-medium break-all">saminarahman404@gmail.com</p>
              </div>
            </a>

            <a href="tel:+8801882804355" className="group flex items-center gap-4 p-4 w-full max-w-md rounded-xl bg-slate-900/50 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="p-3 rounded-full bg-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Call Me</p>
                <p className="text-slate-200 font-medium">+8801882804355</p>
              </div>
            </a>

            <div className="flex items-center gap-2 text-slate-500 mt-4">
              <MapPin size={16} />
              <span>Chattogram, Bangladesh</span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
