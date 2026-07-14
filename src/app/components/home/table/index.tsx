"use client";
import Image from "next/image";

const Table = () => {
  return (
    <section id="exchange-section" className="scroll-mt-20 py-12">
      <div className="container mx-auto px-4">
        {/* Caixa principal do template adaptada para o evento */}
        <div className="rounded-2xl bg-tablebg p-8 relative z-10 overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(168,85,247,0.05)]">
          
          {/* Título da Seção */}
          <div className="text-center mb-10">
            <p className="text-xs font-black tracking-[0.3em] text-cyan-400 uppercase mb-1">
              Regulamento & Vantagens
            </p>
            <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
              Como Funciona o Projeto
            </h2>
            <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3"></div>
          </div>

          {/* Grid de 3 Colunas baseada nos dados do cartaz */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            
            {/* Coluna 1: Para as Lojas */}
            <div className="bg-black/30 rounded-xl p-6 border border-white/5 hover:border-pink-500/30 transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl bg-pink-500/10 text-pink-500 p-2.5 rounded-lg shadow-[0_0_15px_rgba(236,72,153,0.1)]">🏬</span>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wide">Para as Lojas</h3>
                  <p className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">Incentivo lojista</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span>Participação <strong>100% gratuita</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span>Indicação de até 30 modelos clientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span>Divulgação massiva da marca durante todo o projeto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span>Direito de uso das fotos dos modelos nas redes sociais.</span>
                </li>
              </ul>
            </div>

            {/* Coluna 2: Para os Modelos */}
            <div className="bg-black/30 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl bg-purple-500/10 text-purple-500 p-2.5 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.1)]">👤</span>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wide">Para os Modelos</h3>
                  <p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Compromisso do candidato</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✨</span>
                  <span>Cada participante deverá adquirir <strong>01 look completo</strong> da loja parceira designada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold">✨</span>
                  <span>Compromisso de venda de <strong>06 convites</strong> para prestigiar o grande evento final.</span>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Benefícios */}
            <div className="bg-black/30 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl bg-cyan-500/10 text-cyan-400 p-2.5 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.1)]">🎓</span>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wide">Benefícios</h3>
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">O que está incluso</p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <span>Workshop de formação completo com <strong>05 aulas preparatórias</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <span>Participação garantida no <strong>desfile oficial</strong> em passarela profissional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <span>Emissão de certificado de participação exclusivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <span><strong>08 fotos em alta definição</strong> produzidas por fotógrafos de moda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <span>Veradeira imersão prática e networking no universo fashion.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      
      {/* Detalhe visual de rodapé corrigido para carregar na Vercel */}
      <Image
        src="/images/table/Untitled.svg"
        alt="ellipse"
        width={2460}
        height={102}
        className="w-full opacity-40 mt-6"
        priority
      />
    </section>
  );
};

export default Table;