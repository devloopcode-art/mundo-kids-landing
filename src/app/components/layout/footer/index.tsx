"use client";

import { Footerlinkdata, Sociallinkdata } from "@/lib/data/pageData";
import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-body-bg relative pt-10">
      <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>
      <div className="container relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 md:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="lg:col-span-6 sm:col-span-2">
            <img
              className="block h-12 w-20px mb-4"
              src={getImagePath("/images/logo/logo.svg")}
              alt="Mundo Kids Logo"
            />
            <p className="text-white/60 text-sm font-normal max-w-96 leading-7 mb-7">
              Uma imersão completa para preparar, desenvolver a autoconfiança 
              e destacar o talento único de cada criança na passarela.
            </p>
            <div className="flex gap-4">
              {Sociallinkdata.map((items, i) => (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  href={"#!"}
                  key={i}
                >
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="hover:opacity-70"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="group relative lg:col-span-2">
            <p className="text-white text-xl font-medium mb-9">Links Úteis</p>
            <ul>
              {Footerlinkdata.map((product, i) => (
                <li key={i} className="mb-5">
                  <Link
                    href={product.href}
                    className="text-white/60 text-sm font-normal mb-6 space-links hover:text-primary"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="text-white text-xl font-medium mb-9">Contato</p>
            
            {/* WhatsApp Atualizado */}
            <Link
              href={"https://wa.me/551197895036"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit"
            >
              <Image
                src={getImagePath("/images/footer/number.svg")}
                alt="whatsapp-icon"
                width={20}
                height={20}
              />
              +55 (11) 9789-5036
            </Link>

            {/* E-mail Atualizado */}
            <Link
              href={"mailto:masfgroove2012@gmail.com"}
              className="text-white/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit"
            >
              <Image
                src={getImagePath("/images/footer/email.svg")}
                alt="email-icon"
                width={20}
                height={20}
              />
              masfgroove2012@gmail.com
            </Link>
            
            <div className="text-white/60 text-sm font-normal mb-6 flex gap-2">
              <Image
                src={getImagePath("/images/footer/address.svg")}
                alt="address-icon"
                width={20}
                height={20}
              />
              São Paulo - SP
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 border-t border-t-lightblue">
        <p className="text-center text-white text-sm">
          @2026 - MUNDO KIDS FASHION EXPERIENCE. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;