"use client";
import { Icon } from "@iconify/react";

// Criamos os dados específicos do Mundo Kids com ícones modernos
const kidsFeatures = [
  {
    icon: "ph:star-bold",
    color: "from-pink-500 to-rose-500",
    heading: "Revelação de Talentos",
    subheading: "Formação completa com 05 aulas de workshop preparatório, preparando crianças e adolescentes para a passarela e para o mercado.",
  },
  {
    icon: "ph:sparkles-bold",
    color: "from-purple-500 to-indigo-500",
    heading: "Experiência Real",
    subheading: "A vivência prática de um desfile de moda oficial com estrutura de ponta, passarela profissional, som, iluminação e camarim.",
  },
  {
    icon: "ph:megaphone-bold",
    color: "from-cyan-500 to-blue-500",
    heading: "Alta Visibilidade",
    subheading: "Divulgação massiva nas redes sociais e cobertura fotográfica profissional (08 fotos HD inclusas) para criar um portfólio incrível.",
  },
  {
    icon: "ph:shopping-bag-open-bold",
    color: "from-amber-500 to-orange-500",
    heading: "Geração de Vendas",
    subheading: "Movimentação real para o comércio lojista através da aquisição de looks e convites, unindo o marketing de experiência ao resultado comercial.",
  }
];

const Features = () => {
  return (
    <section id="features-section" className="scroll-mt-20 py-20 relative overflow-hidden">
      <div className="container relative mx-auto px-4">
        {/* Manutençao do efeito de blur do template adaptado para as novas cores */}
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 absolute w-full h-full top-0 -left-1/4 blur-390 pointer-events-none"></div>
        
        <div className="gap-x-4 gap-y-4 relative z-10">
          {/* Cabeçalho da Seção */}
          <div className="mb-16 text-center">
            <p className="text-pink-500 text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-3">
              Diferenciais do Projeto
            </p>
            <h2 className="font-black mb-6 max-w-2xl mx-auto text-2xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
              Muito mais que um desfile, uma <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">imersão fashion</span>
            </h2>
            <p className="text-sm sm:text-base font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Descubra os quatro pilares que tornam o Mundo Kids Fashion Experience o maior e mais completo evento focado em desenvolvimento, marketing e moda infantil.
            </p>
          </div>

          {/* Grid de Cards (Mudado para 2 ou 4 colunas para alinhar perfeitamente os 4 pilares) */}
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kidsFeatures.map((item, i) => (
                <div
                  className="bg-[#0e0b16] p-8 rounded-2xl flex flex-col gap-4 border border-white/5 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 group"
                  key={i}
                >
                  {/* Círculo do Ícone com Degradê */}
                  <div className={`rounded-2xl bg-gradient-to-br ${item.color} w-fit p-4 flex items-center justify-center shadow-lg`}>
                    <Icon 
                      icon={item.icon} 
                      className="text-white text-2xl"
                    />
                  </div>
                  
                  {/* Removido o 'capitalize' para aceitar acentuações nativas em português perfeitamente */}
                  <h3 className="text-white font-bold text-lg tracking-wide group-hover:text-pink-400 transition-colors">
                    {item.heading}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-normal leading-relaxed">
                    {item.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;