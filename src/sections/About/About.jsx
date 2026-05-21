// src/sections/About.jsx
import React from "react";
import { Check } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";

export default function About() {
  const checkItems = [
    "Açaí 100% puro, sem adição de xaropes industriais ou corantes",
    "Frutas frescas selecionadas e higienizadas diariamente",
    "Opções zero açúcar e complementos de marcas legítimas (Nutella, Leite Ninho)",
    "Processo de entrega monitorado para chegar perfeitamente congelado",
  ];

  return (
    <section
      id="sobre"
      className="px-4 lg:px-8 py-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 scroll-mt-16"
    >
      {/* Imagem Destaque com Moldura Premium */}
      <div className="flex-1 w-full order-2 lg:order-1">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-purple-500 rounded-3xl blur-xl opacity-10 pointer-events-none" />
          <img
            src="https://media.istockphoto.com/id/1360042022/pt/foto/acai-amazon-fruit.jpg?s=1024x1024&w=is&k=20&c=LGGIxdlgspw__qcYa9RxygGjpo1jZ0aQ8zXIN3GvQyY="
            alt="Bastidores e qualidade do nosso açaí"
            className="w-full h-auto aspect-4/3 sm:aspect-video lg:aspect-square object-cover rounded-2xl shadow-lg border border-stone-200/80"
            loading="lazy"
          />
        </div>
      </div>

      {/* Conteúdo Institucional */}
      <div className="flex-1 space-y-6 order-1 lg:order-2 text-left">
        <SectionTitle
          tag="Nossa História"
          title="Mais que um açaí, uma experiência de sabor artesanal."
          subtitle="Nascemos com o propósito de redefinir o conceito de açaí rápido. Unimos a cremosidade do fruto puro colhido diretamente do Norte com os acompanhamentos premium que todo mundo ama."
          center={false}
        />

        {/* Lista de Diferenciais Técnicos */}
        <ul className="space-y-4 pt-2">
          {checkItems.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 font-semibold text-stone-700 text-sm sm:text-base"
            >
              <span className="p-1 rounded-lg bg-emerald-50 text-brand-accent shrink-0 mt-0.5 border border-emerald-100">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="leading-relaxed font-normal text-stone-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
