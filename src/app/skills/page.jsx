"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDaisyui,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "DaisyUI", icon: SiDaisyui, color: "text-purple-400" },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "REST APIs", icon: FaCloud, color: "text-blue-400" },
    ],
  },
  {
    title: "Database & Deployment",
    icon: FaDatabase,
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Netlify", icon: SiNetlify, color: "text-cyan-400" },
    ],
  },
];

export default function SkillsPage() {
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
          My <span className="text-purple-400">Skills</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-purple-500 rounded mb-16"
        />

        {/* Skill Sections */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((section, index) => {
            const SectionIcon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="card bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition"
              >
                <div className="card-body">
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <SectionIcon className="text-3xl text-purple-400" />
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-4">
                    {section.items.map((skill, i) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-purple-500/10 transition"
                        >
                          <SkillIcon className={`text-2xl ${skill.color}`} />
                          <span className="text-lg">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
