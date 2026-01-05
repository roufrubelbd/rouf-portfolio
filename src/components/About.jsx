'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-purple-500 rounded mb-10"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            I am a <span className="text-purple-400 font-semibold">Full Stack Developer</span> specializing
            in the <span className="font-semibold text-purple-400">MERN Stack</span>. I am passionate about building
            user-centric web applications that are scalable, performant, and visually engaging.
          </p>

          <p>
            I enjoy working across both frontend and backend technologies, crafting seamless user
            experiences with modern tools like <span className="font-semibold">React, Next.js, Tailwind CSS</span>,
            and building reliable server-side systems using <span className="font-semibold">Node.js, Express, and MongoDB</span>.
          </p>

          <p>
            I am always eager to learn emerging technologies, explore new design patterns, and
            collaborate with a cooperative and innovative team to deliver impactful web solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          <div className="card bg-white/5 backdrop-blur border border-white/10 p-6 text-center">
            <p className="text-4xl font-bold text-purple-400">3+</p>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>

          <div className="card bg-white/5 backdrop-blur border border-white/10 p-6 text-center">
            <p className="text-4xl font-bold text-purple-400">15+</p>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="card bg-white/5 backdrop-blur border border-white/10 p-6 text-center">
            <p className="text-4xl font-bold text-purple-400">100%</p>
            <p className="text-gray-300 mt-2">Learning Mindset</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
