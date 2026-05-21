// src/sections/Menu/Menu.jsx
import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";

export default function Menu({
  products,
  categories,
  activeCategory,
  onCategoryChange,
  onAddToCart,
}) {
  return (
    <section
      id="cardapio"
      className="bg-stone-100/70 border-y border-stone-200/60 px-4 lg:px-8 py-20 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Cabeçalho da Seção */}
        <AnimateOnScroll direction="down">
          <div className="text-center space-y-6">
            <SectionTitle
              tag="Cardápio Completo"
              title="Explore Nossas Delícias"
              subtitle="Do clássico ao turbinado, escolha a opção ideal para o seu tamanho de fome."
              center={true}
            />

            {/* Abas de Categorias */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer border ${
                    activeCategory === category.id
                      ? "bg-brand-purple text-white border-brand-purple shadow-md shadow-brand-purple/10"
                      : "bg-white text-stone-600 hover:bg-stone-50 border-stone-200 shadow-xs"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Grid de Produtos */}
        {products.length === 0 ? (
          <div className="text-center py-12 text-stone-400 font-light">
            Nenhum produto encontrado nesta categoria no momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <AnimateOnScroll
                key={product.id}
                direction="up"
                delay={index * 0.15}
              >
                <ProductCard
                  product={product} // Passa o produto puro com a imagem correta do menuData
                  onActionClick={onAddToCart}
                  actionLabel="Montar Copo"
                />
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
