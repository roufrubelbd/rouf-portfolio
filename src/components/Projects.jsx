"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "FurryGlow",
    category: "Frontend",
    date: "Nov 2025",
    overview: [
      "Built a responsive MERN application with a sticky navbar, structured landing page, and consistent UI.",
      "Added an All Items page with card view, sorting/filtering, and public access to details.",
      "Implemented clean item details, equal-height cards, and a professional footer with logo and social links.",
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
    github: { frontend: "https://github.com/roufrubelbd/furry-glow-services" },

    // Screenshots
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
      "Built responsive UI using Next.js, Tailwind CSS, DaisyUI.",
      "Connected backend with MongoDB Atlas and deployed on Vercel.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "NextAuth",
      "TailwindCSS",
      "DaisyUI",
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
      "Added CSV exports and Light/Dark theme toggle.",
      "Implemented secure authentication with Firebase Auth.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vercel",
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
      "Built a responsive React web app to showcase apps with downloads, ratings, and detailed descriptions.",
      "Implemented real-time search, sorting options, and interactive ratings visualization with Recharts.",
      "Developed install/uninstall functionality using localStorage with success notifications via SweetAlert2.",
      "Created detailed app pages and custom error/empty-state pages, fully optimized for mobile, tablet, and desktop.",
    ],
    technologies: ["JavaScript", "React", "TailwindCSS", "DaisyUI"],
    live: "https://roufrubelbd-assignment-08.netlify.app",
    github: { frontend: "https://github.com/roufrubelbd/assignment-08" },

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
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-8"
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

        {/* Projects Grid */}
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
              {/* Image */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {project.screenshots?.map((image, idx) => (
                  <figure className="relative h-35" key={idx}>
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      className="rounded shadow cursor-pointer hover:scale-102 transition-transform duration-300"
                    />
                  </figure>
                ))}
              </div>

              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="card-title text-2xl">{project.title}</h2>
                  <span className="badge badge-outline">{project.type}</span>
                </div>

                <p className="text-sm text-gray-400 mb-3">{project.date}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {project.overview.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="badge badge-sm badge-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="card-actions">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="btn btn-sm btn-primary"
                    >
                      Live Site
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub Frontend
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      className="btn btn-sm btn-outline"
                    >
                      GitHub Backend
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
