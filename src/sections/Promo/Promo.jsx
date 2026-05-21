// src/sections/Promo.jsx
import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";

export default function Promo({ products, onAddToCart }) {
  // Filtramos os produtos que pertencem à categoria de combos promocionais
  const promoProducts = products.filter(
    (product) => product.category === "combos",
  );

  return (
    <section
      id="promos"
      className="px-4 lg:px-8 py-20 max-w-7xl mx-auto scroll-mt-16"
    >
      {/* Título Padronizado da Seção */}
      <SectionTitle
        tag="Economize Muito"
        title="Combos Imperdíveis"
        subtitle="Os favoritos da nossa galera combinados com preços especiais que cabem no seu bolso."
        center={true}
      />

      {/* Grid de Cards Promocionais Ampliados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {promoProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
          >
            {/* Tag Dinâmica flutuante no topo */}
            {product.tag && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs z-10">
                {product.tag}
              </span>
            )}

            {/* Foto customizada para a proporção do card horizontal */}
            <div className="w-full sm:w-44 h-44 shrink-0 overflow-hidden rounded-2xl bg-stone-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Conteúdo Detalhado e Preço */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-brand-purple transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-50">
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">
                    Preço Especial
                  </span>
                  <span className="text-2xl font-black text-brand-dark">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="px-5 py-3 bg-brand-purple/10 hover:bg-brand-purple text-brand-purple hover:text-white font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                >
                  Garantir Combo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
