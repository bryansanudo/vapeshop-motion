import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center  bg-gradient-to-r from-[#29A52D] to-[#5C24B3] text-white py-2 rounded-lg mb-10 shadow-xl shadow-gray-600">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 1)}
          className="flex w-full items-center justify-evenly text-3xl"
        >
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrerr"
              className="duration-500 hover:scale-150"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
