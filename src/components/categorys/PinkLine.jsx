import React from "react";
import Section from "@/components/common/Section";

import product1 from "@/assets/categorys/pinkLine/product1.jpg";
import product2 from "@/assets/categorys/pinkLine/product2.jpg";
import product3 from "@/assets/categorys/pinkLine/product3.jpg";
import product4 from "@/assets/categorys/pinkLine/product4.jpg";
import product5 from "@/assets/categorys/pinkLine/product5.jpg";
import product6 from "@/assets/categorys/pinkLine/product6.jpg";
import product7 from "@/assets/categorys/pinkLine/product7.jpg";
import product8 from "@/assets/categorys/pinkLine/product8.jpg";
import product9 from "@/assets/categorys/pinkLine/product9.jpg";
import product10 from "@/assets/categorys/pinkLine/product10.jpg";
import product11 from "@/assets/categorys/pinkLine/product11.jpg";
import product12 from "@/assets/categorys/pinkLine/product12.jpg";
import product13 from "@/assets/categorys/pinkLine/product13.jpg";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const PinkLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Co01UcbtzQh/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B2Tq33tBsDR/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B-Hva2dBD5m/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B3O5QQPhOw6/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CDm1fp2sG29/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B-HTP0KB5n-/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CFigatpsQBh/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CF3TwRPssHz/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/BxzQ1M2hqgu/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B3JC9EEhOQj/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/BulUlD-n8Jo/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CNZxep2sSp6/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
    {
      id: 13,
      src: product13,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B56MInmhY3U/",
      codeWpp: "https://api.whatsapp.com/send?phone=573043936109",
    },
  ];

  return (
    <Section
      name="portafolio"
      title="¡Bienvenidos a VOU FIT!  "
      subtitle={`
      ¿Estás buscando el outfit perfecto para disfrutar de tu rutina de entreno? Nuestros outfits son muy cómodos y duraderos ¡No esperes más y compra tu ropa deportiva ahora! Mira nuestra amplia selección de estilos y tallas.`}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
        <Navigate />
        <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
          {portfolios.map(({ id, src, codeInstagram, category, codeWpp }) => (
            <div
              key={id}
              className="rounded-lg shadow-lg shadow-[#e0598d] group"
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={src}
                  className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                />
                <p className="m-4 capitalize text-sm md:text-lg">{category}</p>
                <div className="flex gap-5">
                  <p>S-M-L-XL</p>
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PinkLine;
