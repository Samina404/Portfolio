import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col justify-center items-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-8">
          I’d love to connect! Whether you want to discuss a project, job opportunity, or collaboration — feel free to reach out.
        </p>
        <p className="text-blue-300 font-semibold">📧 saminarahman404@gmail.com</p>
        <p className="text-gray-400 mt-2">📍 Chattogram, Bangladesh</p>
      </motion.div>
    </section>
  );
}
