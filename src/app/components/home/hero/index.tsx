"use client";
import { getImagePath } from "@/lib/utils/imagePath";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <section className="relative pb-0" id="home-section">
      <div className="bg-banner-image absolute w-full h-full top-0 blur-390"></div>
      <div className="overflow-hidden">
        <div className="container lg:pt-20 pt-10 relative">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 my-16 items-center">
              <div className="lg:col-span-7 mb-16">
                {/* Tag de idade igual ao topo do cartaz */}
                <span className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(236,72,153,0.4)] text-white">
                  Para crianças e adolescentes de 06 a 15 anos
                </span>
                
                <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-1 lg:text-start text-center">
                  PROJETO DESFILE
                </p>
                
                {/* Título com cores em degradê neon */}
                <h1 className="mb-5 lg:text-start text-center sm:leading-snug leading-tight font-black uppercase text-white">
                  Mundo <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">Kids</span> <br /> 
                  <span className="font-light tracking-[0.1em] text-2xl lg:text-4xl block mt-2 text-gray-300">Fashion Experience</span>
                </h1>
                
                {/* Texto descritivo principal */}
                <p className="text-gray-300 font-normal mb-6 max-w-[90%] lg:text-start text-center lg:mx-0 mx-auto text-sm md:text-base leading-relaxed">
                  <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 uppercase mb-2">
                    Talento, Experiência, Visibilidade e Vendas.
                  </span>
                  Um projeto inovador voltado para crianças e adolescentes de 06 a 15 anos, unindo formação, experiência, marketing e geração de vendas para lojas participantes.
                </p>
                
                <div className="flex align-middle justify-center lg:justify-start gap-4 flex-wrap">
                  {/* Botão de Inscrição */}
                  <button className="text-base font-bold text-white py-4 px-8 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 hover:brightness-110 rounded-xl cursor-pointer shadow-[0_4px_20px_rgba(236,72,153,0.3)] transition-all">
                    Quero Participar
                  </button>
                  
                  {/* Botão do Instagram mudado do "How it works" */}
                  <a
                    href="https://instagram.com/kids_fashion_experience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-pink-500/30 bg-pink-950/10 flex justify-center items-center text-white cursor-pointer px-6 py-4 rounded-xl hover:bg-pink-950/30 transition-all text-sm font-semibold"
                  >
                    <span className="text-pink-400 mr-2">📸</span>
                    <span className="text-gray-200">@kids_fashion_experience</span>
                  </a>
                </div>
              </div>
              
              {/* Mantive a estrutura da foto da direita, onde você vai poder colocar a foto das crianças depois */}
              <div className="lg:col-span-5 lg:-m-48 -m-20 overflow-hidden">
                <Image
                  src={getImagePath("/images/banner/banner.png")}
                  alt="Mundo Kids Fashion"
                  width={1013}
                  height={760}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* O Modal continua aqui caso você queira colocar um vídeo do desfile no futuro! */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg sm:m-0 m-4">
            <div className="overlay flex items-center justify-between border-b border-solid border-white/10 p-5 z-50 backdrop-blur-sm">
              <h3 className="text-white font-bold">Conheça o Projeto</h3>
              <button onClick={closeModal} className="inline-block dark:invert">
                <Icon
                  icon="tabler:circle-x"
                  className="text-2xl text-white hover:cursor-pointer hover:text-pink-200"
                />
              </button>
            </div>
            <iframe
              height="400"
              className="p-4 md:w-[50rem] w-full"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="Mundo Kids"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;