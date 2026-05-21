// src/sections/Navbar.jsx
import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Navbar({ cartItemCount, onCartOpen }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/80 px-4 lg:px-8 py-4 flex items-center justify-between">
      {/* Logo com tipografia Premium e forte impacto visual */}
      <a
        href="#"
        className="text-2xl font-black tracking-tight text-brand-dark"
      >
        AÇAÍ<span className="text-brand-purple">PREMIUM</span>
      </a>

      {/* Links de navegação fluidos (visíveis apenas em telas médias ou maiores) */}
      <div className="hidden md:flex items-center gap-8 font-semibold text-stone-600 text-sm tracking-wide">
        <a
          href="#promos"
          className="hover:text-brand-purple transition-colors duration-200"
        >
          Promoções
        </a>
        <a
          href="#cardapio"
          className="hover:text-brand-purple transition-colors duration-200"
        >
          Cardápio
        </a>
        <a
          href="#sobre"
          className="hover:text-brand-purple transition-colors duration-200"
        >
          Nossa História
        </a>
        <a
          href="#depoimentos"
          className="hover:text-brand-purple transition-colors duration-200"
        >
          Depoimentos
        </a>
      </div>

      {/* Botão de Trigger do Carrinho Lateral */}
      <button
        onClick={onCartOpen}
        className="relative p-2.5 rounded-xl bg-brand-dark text-white hover:bg-brand-purple transition-all duration-200 shadow-md shadow-brand-dark/10 active:scale-95 cursor-pointer"
        aria-label="Abrir carrinho de compras"
      >
        <ShoppingBag size={20} />
        {cartItemCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
            {cartItemCount}
          </span>
        )}
      </button>
    </nav>
  );
}
