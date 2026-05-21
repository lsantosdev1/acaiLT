// src/components/ProductCard/ProductCard.jsx
import React from "react";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({
  product,
  onActionClick,
  actionLabel = "Adicionar",
}) {
  // Destruturação segura garantindo valores padrão para evitar quebras se algo vier vazio
  const { name, description, price, tag, image } = product;

  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between h-full group text-left">
      {/* Container da Imagem com Controle de Proporção */}
      <div className="relative aspect-4/3 sm:aspect-video lg:aspect-4/3 w-full bg-stone-100 overflow-hidden">
        {tag && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-brand-purple text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
            {tag}
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            // Caso a internet falhe ou o link quebre, exibe uma imagem de fallback elegante
            e.target.src =
              "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=600";
          }}
        />
      </div>

      {/* Conteúdo Informativo */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="font-black text-stone-900 text-base sm:text-lg tracking-tight leading-snug">
            {name}
          </h3>
          <p className="text-stone-500 font-light text-xs sm:text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Rodapé do Card com Preço e Ação */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">
              A partir de
            </span>
            <span className="text-xl font-black text-brand-dark">
              R$ {price.toFixed(2).replace(".", ",")}
            </span>
          </div>

          <button
            onClick={() => onActionClick(product)}
            className="px-4 py-2.5 bg-brand-purple hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all duration-150 shadow-md shadow-brand-purple/5 flex items-center gap-1.5 cursor-pointer active:scale-95 select-none"
          >
            <ShoppingBag size={14} />
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
