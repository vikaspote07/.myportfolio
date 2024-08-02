import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com" },
    { icon: FaLinkedin, url: "www.linkedin.com/in/vikas-pote-b4ba87187" }, //linkdn url added
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaEnvelope, url: "gmail.com" },
  ];

  return (
    <section
      id="contact"
      className="bg-gray-900 min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-300 mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-green-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-300 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-green-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg text-gray-300 mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-green-500 transition-colors duration-300"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-green-500 rounded-md text-white font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-8"
          >
            <p className="text-xl text-gray-300 text-center lg:text-left">
              Feel free to reach out to me through any of these platforms:
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#4ade80" }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <link.icon size={32} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
