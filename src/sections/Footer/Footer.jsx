// src/sections/Footer.jsx
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 px-4 lg:px-8 py-12 border-t border-stone-900 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Identidade e Direitos Autorais */}
        <div className="space-y-1">
          <h3 className="text-white font-black tracking-tight text-base sm:text-lg">
            AÇAÍ<span className="text-brand-purple">PREMIUM</span>
          </h3>
          <p className="text-stone-500 font-light">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
        </div>

        {/* Links Estratégicos de Conversão e Redes */}
        <div className="flex flex-wrap justify-center gap-6 font-semibold text-stone-400 tracking-wide">
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition-colors duration-200"
          >
            iFood
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-accent transition-colors duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
