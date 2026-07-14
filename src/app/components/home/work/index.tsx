"use client";
import { workdata } from "@/lib/data/pageData";
import Image from "next/image";

const Work = () => {
  // Função para garantir que os caminhos das imagens/ícones fiquem limpos sem prefixos quebrados
  const resolveSrc = (src: string) => {
    if (!src) return "";
    return src
      .replace("/crypto-nextjs-1.0.0", "")
      .replace("crypto-nextjs-1.0.0", "")
      .replace("/public", "");
  };

  return (
    <section className="relative py-20" id="work-section">
      <div className="bg-banner-image absolute w-full h-full right-auto blur-390" />
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho adaptado para o Mundo Kids */}
        <div className="text-center mb-14">
          <span className="text-xs font-black tracking-[0.3em] text-pink-500 uppercase mb-2 block drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Passo a Passo
          </span>
          <h2 className="mb-4 text-3xl md:text-4xl font-extrabold uppercase text-white tracking-wide">
            Como Funciona o Projeto?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto md:text-lg font-normal md:leading-8">
            Participar da maior experiência de moda infantil é muito simples. 
            Preparamos uma jornada segura, divertida e profissional para que pequenos talentos 
            brilhem nas passarelas e impulsionem as marcas parceiras.
          </p>
        </div>

        {/* Grid de passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-6 mt-24">
          {workdata?.map((items, i) => (
            <div
              className="bg-[#0c0914] border border-white/5 group hover:border-pink-500/50 hover:scale-105 duration-300 p-8 relative rounded-2xl hover:mb-5 transition-all shadow-lg"
              key={i}
            >
              {/* Ícone no topo */}
              <div className="rounded-full flex justify-center absolute -top-10 left-1/2 -translate-x-1/2 p-6 bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                <Image
                  src={resolveSrc(items.imgSrc)}
                  alt="Passo do Projeto"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>

              {/* Detalhe de fundo do card */}
              <div className="flex justify-end opacity-20 group-hover:opacity-40 transition-opacity">
                <Image
                  src="/images/icons/bg-arrow.svg"
                  alt="arrow-bg"
                  width={85}
                  height={35}
                />
              </div>

              {/* Título do Passo */}
              <p className="text-2xl text-white font-bold text-center mt-4 tracking-wide">
                {items.heading}
              </p>

              {/* Descrição do Passo */}
              <p className="text-base font-normal text-gray-400 text-center mt-3 leading-relaxed">
                {items.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;