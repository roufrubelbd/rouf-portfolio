"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FurryGlow",
    category: "Frontend",
    date: "Nov 2025",
    overview: [
      "Built a responsive MERN application with a sticky navbar and consistent UI.",
      "Added All Items page with card view, sorting/filtering.",
      "Implemented professional footer with logo and social links.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "DaisyUI",
      "Firebase Auth",
      "Firebase Deploy",
    ],
    live: "https://furry-glow-services.web.app",
    github: {
      frontend: "https://github.com/roufrubelbd/furry-glow-services",
    },
    screenshots: [
      "/screenshots/furry1.png",
      "/screenshots/furry2.png",
      "/screenshots/furry3.png",
      "/screenshots/furry4.png",
    ],
  },
  {
    title: "Comforts",
    category: "Full-Stack",
    date: "Oct 2025",
    overview: [
      "Developed REST APIs using Node.js and Express.",
      "Integrated Google & Credentials login via NextAuth.",
      "Connected backend with MongoDB Atlas and deployed on Vercel.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "NextAuth",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
    ],
    live: "https://comforts-products-management-fullst.vercel.app",
    github: {
      frontend:
        "https://github.com/roufrubelbd/comforts_products_management_client",
      backend:
        "https://github.com/roufrubelbd/comforts_products_management_server",
    },
    screenshots: [
      "/screenshots/comfort1.png",
      "/screenshots/comfort2.png",
      "/screenshots/comfort3.png",
      "/screenshots/comfort4.png",
    ],
  },
  {
    title: "TechBridge Asia",
    category: "Full-Stack",
    date: "Sep 2025",
    overview: [
      "Implemented dashboards for exporters and importers.",
      "Built full CRUD functionality using Express API + MongoDB.",
      "Added CSV exports and theme toggle.",
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: "https://assignment-10-business-hub.web.app",
    github: {
      frontend: "https://github.com/roufrubelbd/assignment-10-client",
      backend: "https://github.com/roufrubelbd/assignment-10-server",
    },
    screenshots: [
      "/screenshots/tech1.png",
      "/screenshots/tech2.png",
      "/screenshots/tech3.png",
      "/screenshots/tech4.png",
    ],
  },
  {
    title: "HERO.IO",
    category: "Frontend",
    date: "Sep 2025",
    overview: [
      "Built a responsive React web app to showcase apps.",
      "Implemented search, sorting, ratings visualization.",
      "Install/uninstall functionality using localStorage.",
    ],
    technologies: ["JavaScript", "React", "TailwindCSS", "DaisyUI"],
    live: "https://roufrubelbd-assignment-08.netlify.app",
    github: {
      frontend: "https://github.com/roufrubelbd/assignment-08",
    },
    screenshots: [
      "/screenshots/hero1.png",
      "/screenshots/hero2.png",
      "/screenshots/hero3.png",
      "/screenshots/hero4.png",
    ],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-10"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h1>

        {/* Filters */}
        <div className="flex gap-4 mb-14">
          {["All", "Frontend", "Full-Stack"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`btn btn-sm rounded-full ${
                filter === btn ? "btn-primary" : "btn-outline btn-primary"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card bg-white/5 backdrop-blur border border-white/10 hover:border-purple-500 transition"
            >
              {/* Top-right links */}
              <div className="flex gap-3 z-10  p-2 rounded mx-4 mt-4 space-x-6 justify-start ">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-purple-400 hover:text-purple-100"
                    title="Live Site"
                  >
                    <div className="flex justify-center items-center gap-1">
                      <FaExternalLinkAlt size={18} /> Website Live Link
                     </div>
                  </a>
                )}
                {project.github?.frontend && (
                  <a
                    href={project.github.frontend}
                    target="_blank"
                    className="text-purple-400 hover:text-purple-100"
                    title="Frontend GitHub"
                  >
                     <div className="flex justify-center items-center gap-1">
                      <FaGithub size={18} /> Frontend Code
                     </div>
                  </a>
                )}
                {project.github?.backend && (
                  <a
                    href={project.github.backend}
                    target="_blank"
                    className="text-purple-400 hover:text-purple-100"
                    title="Backend GitHub"
                  >
                   <div className="flex justify-center items-center gap-1">
                      <FaGithub size={18} /> Backend Code
                     </div> 
                    
                  </a>
                )}
              </div>

              {/* Screenshots */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {project.screenshots.map((img, i) => (
                  <div key={i} className="relative h-32">
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="card-title text-2xl">{project.title}</h2>
                  <span className="badge badge-outline">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-3">{project.date}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {project.overview.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="badge badge-sm badge-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

