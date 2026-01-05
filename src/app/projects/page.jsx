'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'FurryGlow',
    type: 'Frontend',
    date: 'Nov 2025',
    image: '/projects/furryglow.png', // add screenshot
    description: [
      'Responsive MERN-style frontend with sticky navbar and structured landing page.',
      'All Items page with card layout, sorting & filtering.',
      'Clean product details, equal-height cards, and professional footer.',
    ],
    live: '#',
    githubFrontend: '#',
    tech: [
      'JavaScript',
      'React',
      'TailwindCSS',
      'DaisyUI',
      'Firebase Auth',
      'Firebase Deploy',
    ],
  },
  {
    title: 'Comforts',
    type: 'Full-Stack',
    date: 'Oct 2025',
    image: '/projects/comforts.png',
    description: [
      'Developed REST APIs using Node.js & Express.',
      'Google & credentials authentication with NextAuth.',
      'Connected MongoDB Atlas and deployed on Vercel.',
    ],
    live: '#',
    githubFrontend: '#',
    githubBackend: '#',
    tech: [
      'JavaScript',
      'React',
      'Next.js',
      'NextAuth',
      'TailwindCSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Vercel',
    ],
  },
  {
    title: 'TechBridge Asia',
    type: 'Full-Stack',
    date: 'Sep 2025',
    image: '/projects/techbridge.png',
    description: [
      'Role-based dashboards for exporters & importers.',
      'Full CRUD functionality with Express API & MongoDB.',
      'CSV export and Light/Dark theme toggle.',
    ],
    live: 'https://assignment-10-business-hub.web.app',
    githubFrontend: '#',
    githubBackend: '#',
    tech: [
      'JavaScript',
      'React',
      'TailwindCSS',
      'DaisyUI',
      'Firebase Auth',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Vercel',
    ],
  },
  {
    title: 'HERO.IO',
    type: 'Frontend',
    date: 'Sep 2025',
    image: '/projects/heroio.png',
    description: [
      'React app showcasing apps with ratings & downloads.',
      'Real-time search, sorting, and Recharts visualizations.',
      'Install/uninstall system using localStorage.',
    ],
    live: '#',
    githubFrontend: '#',
    tech: ['JavaScript', 'React', 'TailwindCSS', 'DaisyUI'],
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.type === filter);

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
          {['All', 'Frontend', 'Full-Stack'].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`btn btn-sm rounded-full ${
                filter === btn
                  ? 'btn-primary'
                  : 'btn-outline btn-primary'
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
              <figure className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="card-title text-2xl">
                    {project.title}
                  </h2>
                  <span className="badge badge-outline">
                    {project.type}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mb-3">
                  {project.date}
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {project.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="badge badge-sm badge-secondary"
                    >
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
