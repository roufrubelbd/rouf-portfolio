"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/roufrubelbd",
      icon: <FaLinkedin size={24} className="text-white" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/roufrubelbd",
      icon: <FaFacebook size={24} className="text-white" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/roufrubelbd",
      icon: <FaGithub size={24} className="text-white" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@roufrubel",
      icon: <FaYoutube size={24} className="text-white" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center px-6 py-24">
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white/5 backdrop-blur-md rounded-xl shadow-xl p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-400">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 my-10">
          {/* CONTACT INFO */}
          <div className="flex-1 bg-purple-900/40 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="flex items-center gap-3 mb-3">
              <MdEmail size={22} />
              <span className="text-lg">roufrubelbd@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <MdPhone size={22} />
              <span className="text-lg">+44 7448 320762</span>
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex-1 bg-purple-900/40 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
            <ul className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <li key={social.name} className="flex items-center gap-3">
                  {social.icon}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg hover:underline"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="to_name" value="Mohammad Abdur Rouf" />

          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 focus:ring-2 focus:ring-purple-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-5 py-3 rounded-lg bg-white/10 focus:ring-2 focus:ring-purple-400"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold bg-purple-500 hover:bg-purple-600 transition ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

