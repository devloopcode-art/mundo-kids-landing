import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";

const Trade = () => {
  return (
    <section id="pilares" className="overflow-hidden py-16 md:py-24 bg-[#0B0813]">
      <div className="container relative">
        {/* Luz de fundo neon */}
        <div className="bg-linear-to-r from-purple-600 to-pink-500 hidden lg:block absolute w-full h-full top-1/2 blur-390 opacity-20"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Lado Esquerdo: Mensagem de Destaque / Chamada */}
          <div className="flex flex-col gap-6 text-center lg:text-start">
            <h2 className="font-black text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
              Viva a Experiência <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Mundo Kids
              </span>
            </h2>
            <p className="lg:text-lg font-normal text-gray-400 max-w-xl mx-auto lg:mx-0">
              Muito mais do que um desfile. Proporcionamos uma imersão completa para preparar, 
              desenvolver a autoconfiança e destacar o talento único de cada criança na passarela mais charmosa do ano.
            </p>
            
            {/* Selo ou Destaque */}
            <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-[#120E24] border border-purple-500/20 px-4 py-2 rounded-full text-xs font-bold text-purple-300 uppercase tracking-wider">
                ✨ Workshop Exclusivo
              </div>
              <div className="bg-[#120E24] border border-pink-500/20 px-4 py-2 rounded-full text-xs font-bold text-pink-300 uppercase tracking-wider">
                📸 Fotos Profissionais
              </div>
            </div>
          </div>

          {/* Lado Direito: Grid de Diferenciais e Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-[#120E24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-4">
                01
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Postura & Passarela</h3>
              <p className="text-gray-400 text-sm">
                Aulas práticas de desenvoltura, posicionamento de câmera e passarela com profissionais ativos no mercado.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#120E24] p-6 rounded-2xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold mb-4">
                02
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Networking Comercial</h3>
              <p className="text-gray-400 text-sm">
                Aproximação direta com lojistas e marcas parceiras em busca de novos rostos para campanhas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#120E24] p-6 rounded-2xl border border-pink-500/10 hover:border-pink-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold mb-4">
                03
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Material Fotográfico</h3>
              <p className="text-gray-400 text-sm">
                Acesso a fotos e registros de alta qualidade do desfile para iniciar ou atualizar o portfólio.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#120E24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold mb-4">
                04
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Autoestima Infantil</h3>
              <p className="text-gray-400 text-sm">
                Foco no desenvolvimento pessoal, estimulando a confiança e a desinibição de forma leve e divertida.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Trade;