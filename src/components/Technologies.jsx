'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiDaisyui,
} from 'react-icons/si';

const technologies = [
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'DaisyUI', icon: SiDaisyui, color: 'text-purple-400' },
  { name: 'Git', icon: FaGit, color: 'text-red-500' },
  { name: 'Database', icon: FaDatabase, color: 'text-indigo-400' },
];

export default function TechnologiesPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Technologies I <span className="text-purple-400">Work With</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 180 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-purple-500 rounded mb-14"
        />

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="group card bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 hover:scale-105 transition-all"
              >
                <div className="card-body items-center justify-center text-center gap-3">
                  <Icon className={`text-5xl ${tech.color} group-hover:scale-110 transition`} />
                  <p className="text-lg font-semibold text-gray-200">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
