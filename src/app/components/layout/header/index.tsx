"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import HeaderLink from "./navigation/HeaderLink";
import MobileHeaderLink from "./navigation/MobileHeaderLink";
import CandidateModal from "../../CandidateModal";

// Menu totalmente adaptado para o Mundo Kids em português alinhado com os IDs
const kidsHeaderData = [
  { label: "Início", href: "#/" },
  { label: "Regulamento", href: "#exchange-section" },
  { label: "Pilares", href: "#pilares" },
  { label: "Dúvidas", href: "#faq-section" },
  { label: "Contato", href: "#contact" },
];

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal da Ficha Mirim

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 10);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen, isModalOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? "shadow-lg bg-body-bg bg-banner-image py-4"
          : "shadow-none py-6"
      }`}
    >
      <div>
        <div className="container flex items-center justify-between mx-auto px-4">
          <Logo />
          
          {/* Menu de Navegação */}
          <nav className="hidden lg:flex grow items-center gap-8 justify-center ml-14">
            {kidsHeaderData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          
          {/* Botões do Topo */}
          <div className="flex items-center gap-4">
            {/* Transformado em <button> para abrir o modal do formulário mirim */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:block bg-linear-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold duration-300 px-6 py-3 rounded-lg text-sm uppercase tracking-wider cursor-pointer"
            >
              Inscrições
            </button>
            
            {/* Mantido como link direto para rolar até a seção de contato */}
            <Link
              href="#contact"
              className="hidden lg:block text-white border border-pink-500/50 hover:bg-pink-500/20 duration-300 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
            >
              Lojas Parceiras
            </Link>
            
            {/* Hambúrguer do menu Mobile */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
        
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        
        {/* Menu responsivo Mobile */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-[#0e0b16] shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <div className="text-lg font-bold text-midnight_text">
              <Logo />
            </div>
            <button
              onClick={() => setNavbarOpen(false)}
              className="hover:cursor-pointer"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="tabler:x"
                className="text-white text-xl hover:text-primary inline-block"
              />
            </button>
          </div>
          <nav className="flex flex-col items-start p-6 text-white gap-2">
            {kidsHeaderData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-6 flex flex-col space-y-4 w-full">
              {/* Botão de inscrição do menu mobile */}
              <button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-center text-white font-bold px-4 py-3 rounded-lg text-sm uppercase tracking-wider cursor-pointer"
                onClick={() => {
                  setNavbarOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Inscrições
              </button>
              <Link
                href="#contact"
                className="bg-transparent border border-pink-500 text-center text-white font-bold px-4 py-3 rounded-lg text-sm uppercase tracking-wider"
                onClick={() => setNavbarOpen(false)}
              >
                Lojas Parceiras
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Pop-up do formulário de candidatos mirins */}
      <CandidateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;