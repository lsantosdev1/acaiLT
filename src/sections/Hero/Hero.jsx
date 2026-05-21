// src/sections/Hero.jsx
import React from "react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Button from "../../components/Button/Button";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-[#18082c] to-stone-950 text-white px-4 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
      {/* Luz radial de fundo para efeito moderno de profundidade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,40,217,0.15),transparent_50%)] pointer-events-none" />

      {/* Textos e CTAs */}
      <div className="flex-1 space-y-6 max-w-2xl relative z-10 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
          <Star size={14} className="fill-purple-300" /> O Verdadeiro Açaí
          Artesanal
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Sabor premium, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            energia que contagia.
          </span>
        </h1>

        <p className="text-stone-300 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
          Monte o seu copo do seu jeito com adicionais selecionados, frutas
          frescas colhidas no dia e caldas artesanais irresistíveis.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a href="#cardapio" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full group">
              Ver Cardápio
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
          </a>

          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="secondary" className="w-full">
              <MessageCircle size={18} className="text-brand-accent" />
              Pedir via WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* Bloco de Imagem Destaque (Estilo Startup) */}
      <div className="flex-1 flex justify-center relative z-10 w-full">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          {/* Brilho neon difuso atrás da foto */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-pink-500 rounded-full blur-3xl opacity-25 animate-pulse" />

          <img
            src="https://media.istockphoto.com/id/1451850026/pt/foto/acai-on-jute-surface-with-strawberries-banana-and-granola.jpg?s=612x612&w=0&k=20&c=iNJyvDynwoo22ZOQHMZc_FBvhiM2D-iZ0GgE5kFJyyM="
            alt="Copo de Açaí Premium com frutas"
            className="w-full h-full object-cover rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 ease-out"
          />
        </div>
      </div>
    </header>
  );
}
