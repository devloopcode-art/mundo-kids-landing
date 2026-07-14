"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

// Perguntas frequentes reais para o evento Mundo Kids
const kidsFaqData = [
  {
    heading: "Qual é a idade permitida para participar?",
    subheading: "O projeto é voltado exclusivamente para crianças e adolescentes com idades entre 06 e 15 anos completos até a data do evento final.",
  },
  {
    heading: "As lojas pagam alguma taxa de inscrição?",
    subheading: "Não! A participação para as lojas parceiras é 100% gratuita. A loja tem direito a indicar seus clientes e ganha divulgação massiva da marca durante o projeto.",
  },
  {
    heading: "Como funciona a dinâmica dos looks e convites?",
    subheading: "Cada modelo participante se compromete a adquirir 01 look completo na loja designada para usar no desfile e realizar a venda de 06 convites para familiares e amigos prestigiarem o evento.",
  },
  {
    heading: "O que está incluso no Workshop?",
    subheading: "O workshop preparatório conta com 05 aulas práticas onde os participantes aprendem técnicas de passarela, postura, desenvoltura, expressão corporal e recebem dicas para o mercado fashion.",
  },
  {
    heading: "As fotos do evento estão inclusas?",
    subheading: "Sim! Cada participante receberá 08 fotos profissionais em alta definição, tratadas e prontas, produzidas por fotógrafos especialistas em moda infantil para iniciar ou atualizar o portfólio.",
  }
];

const Faq = () => {
  return (
    <section id="faq-section" className="scroll-mt-20 overflow-hidden py-20 relative">
      <div className="container relative z-10 mx-auto px-4">
        
        {/* Cabeçalho do FAQ */}
        <div className="text-center mb-12">
          <p className="text-pink-500 text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-2">
            Dúvidas Frequentes
          </p>
          <h2 className="font-black mb-4 text-2xl sm:text-4xl text-white uppercase tracking-wide">
            Perguntas <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tem alguma dúvida sobre as inscrições, workshops ou funcionamento do desfile? Confira as respostas abaixo ou fale conosco.
          </p>
        </div>

        <div>
          <div className="grid lg:grid-cols-12 items-center gap-8">
            {/* Coluna das Perguntas (Ajustado para ocupar 7 colunas na esquerda) */}
            <div className="lg:col-span-7 w-full">
              <div className="w-full pt-4">
                {kidsFaqData.map((items, i) => (
                  <div
                    className="mx-auto w-full rounded-2xl bg-[#0e0b16] py-5 px-6 mb-4 border border-white/5 hover:border-purple-500/20 transition-all"
                    key={i}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <div>
                          <DisclosureButton className="flex w-full justify-between items-center rounded-lg text-white text-left text-base sm:text-lg font-bold cursor-pointer group">
                            <span className="group-hover:text-pink-400 transition-colors pr-4">{items.heading}</span>
                            <Icon
                              icon="tabler:chevron-down"
                              className={`${
                                open ? "rotate-180 text-pink-500" : "text-purple-500"
                              } text-xl transition-transform duration-200 shrink-0`}
                            />
                          </DisclosureButton>
                          <DisclosurePanel className="pt-4 text-sm sm:text-base text-gray-400 font-normal leading-relaxed border-t border-white/5 mt-3">
                            {items.subheading}
                          </DisclosurePanel>
                        </div>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna da Imagem Lateral (Ocupa 5 colunas na direita com caminho corrigido) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
              <div className="relative w-full max-w-[400px] aspect-square opacity-40 lg:opacity-80">
                <Image
                  src="/images/faq/faq.svg"
                  alt="Mundo Kids FAQ"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Faq;