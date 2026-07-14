"use client";
import { Companiesdata } from "@/lib/data/pageData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Função robusta para limpar o caminho
  const resolveSrc = (src: string) => {
    if (!src) return "";
    
    // Remove qualquer prefixo legado
    let clean = src
      .replace("/crypto-nextjs-1.0.0", "")
      .replace("crypto-nextjs-1.0.0", "")
      .replace("/public", "")
      .replace("public/", "");

    // Garante que o caminho comece com uma barra para o Next.js mapear para a pasta public
    if (!clean.startsWith("/")) {
      clean = "/" + clean;
    }
    
    return clean;
  };

  return (
    // Fundo preto premium para contraste total
    <section className="border-t border-b border-white/5 py-12 bg-[#09070f]">
      <div className="container mx-auto px-4">
        
        {/* Título com cores fortes e visíveis */}
        <div className="text-center mb-8">
          <p className="text-xs font-black tracking-[0.3em] text-pink-500 uppercase mb-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            Marcas Confirmadas
          </p>
          <h3 className="text-base font-extrabold text-white uppercase tracking-widest">
            Lojas Parceiras & Participantes
          </h3>
          <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-3"></div>
        </div>

        {/* Slider de Marcas */}
        <div className="opacity-90 hover:opacity-100 transition-opacity duration-300">
          <Slider {...settings}>
            {Companiesdata?.map((item: any, i: any) => (
              <div key={i} className="outline-none px-4">
                {/* Removidos filtros excessivos (brightness/contrast/invert) que podem ocultar imagens coloridas ou já otimizadas */}
                <div className="flex items-center justify-center h-16 transition-all duration-300">
                  <Image
                    src={resolveSrc(item.imgSrc)}
                    alt="Loja Participante"
                    width={203}
                    height={101}
                    className="w-auto max-h-12 object-contain mx-auto"
                    priority={i < 5} // Melhora o carregamento das primeiras marcas expostas
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companies;