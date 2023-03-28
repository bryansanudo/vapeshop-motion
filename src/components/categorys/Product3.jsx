import React from "react";
import Section from "@/components/common/Section";

import product1 from "@/assets/categorys/product3/product1.jpg";
import product2 from "@/assets/categorys/product3/product2.jpg";
import product3 from "@/assets/categorys/product3/product3.jpg";
import product4 from "@/assets/categorys/product3/product4.jpg";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const BlueLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        name="portafolio"
        title="¡Hola!  "
        subtitle={`
      Nos complace presentarte nuestra amplia gama de productos de alta calidad. Ofrecemos una variedad para que puedas encontrar el que más te guste.

      Puedes encontrar Vapes, cartuchos de repuesto, baterías y cargadores, además de otros accesorios esenciales para mantener tus dispositivos en perfecto estado.`}
      >
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1  lg:grid-cols-3">
            {portfolios.map(({ id, src, codeInstagram, category, codeWpp }) => (
              <motion.div
                variants={fadeIn("right", "spring", id * 0.5, 0.75)}
                key={id}
                className="rounded-lg shadow-lg shadow-[#6057ca] group w-[260px] mx-auto "
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={src}
                    className="mt-5 h-[100px] w-[100px] shadow-lg shadow-gray-600  object-contain rounded-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    {category}
                  </p>
                  <div className="flex gap-5">
                    <p>$$$</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeInstagram} target="_blank" rel="noreferrer">
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeWpp} target="_blank" rel="noreferrer">
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlueLine;
