"use client";

import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useEffect } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";

export default function Hero() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4"
            >
              Hey, I'm{" "}
              <span className="text-purple-400">Mohammad Abdur Rouf</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-xl mb-4 text-purple-300"
            >
              MERN Stack Developer | MongoDB | Express | React | Node.js |
              Next.js | Learning Full-Stack Development
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-2xl mb-6 text-purple-300"
            >
              <ReactTyped
                strings={[
                  "Building Modern Web Apps",
                  "Passionate about Clean Code",
                  "Creating Scalable Solutions",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="mt-6 flex gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary hover:bg-emerald-700"
                >
                  <GoDownload className="mr-1" />Download Resume
                </a>
                <Link
                  href="/contact"
                  className="btn btn-outline hover:bg-emerald-700 hover:text-white"
                >
                  Contact Me
                </Link>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/roufrubelbd"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline hover:bg-emerald-700 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/roufrubelbd"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline hover:bg-emerald-700 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@roufrubel"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline hover:bg-emerald-700 hover:text-white"
                >
                  YouTube
                </a>
              </div>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="flex justify-center lg:justify-start gap-10 text-sm"
            >
              <div>
                <p className="text-3xl font-bold text-purple-400">15+</p>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">3+</p>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Abdur Rouf"
                  fill
                  className="object-cover rounded-full border-white/10 border-2"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
