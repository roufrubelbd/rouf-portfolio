'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <h2 className="text-2xl font-bold text-white">
            Mohammad Abdur Rouf
          </h2>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/roufrubelbd"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/roufrubelbd"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@roufrubel"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/roufrubelbd"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              Facebook
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider my-8 divider-neutral"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm"
        >
          © {new Date().getFullYear()} Mohammad Abdur Rouf.  
          All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}
