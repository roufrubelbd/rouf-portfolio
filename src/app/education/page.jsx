"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master’s in Economics",
    institution: "National University, Bangladesh",
    year: "2010",
    marks: "59%",
  },
  {
    degree: "Bachelor’s in Economics",
    institution: "National University, Bangladesh",
    year: "2009",
    marks: "57%",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Moulvibazar Govt. College",
    year: "2004",
    marks: "55%",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Kholagaon Karimpur High School",
    year: "2002",
    marks: "56%",
  },
];

export default function Education() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          🎓 <span className="text-purple-400">Education</span>
        </motion.h2>

        {/* EDUCATION TABLE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="overflow-x-auto"
        >
          <table className="table w-full bg-white/5 backdrop-blur rounded-xl">
            <thead className="text-purple-300 text-lg">
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="hover:bg-purple-500/10 transition"
                >
                  <td className="font-semibold">{edu.degree}</td>
                  <td className="text-gray-300">{edu.institution}</td>
                  <td>{edu.year}</td>
                  <td className="text-purple-400 font-bold">{edu.marks}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* TIMELINE VIEW (OPTIONAL STYLE) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-10 text-center text-purple-300">
            Academic Timeline
          </h3>

          <div className="max-w-3xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="border-l-4 border-purple-500 pl-6"
              >
                <h4 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h4>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-purple-400">
                  {edu.year} • Marks: {edu.marks}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
