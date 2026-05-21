// src/sections/Testimonials.jsx
import React from "react";
import { Star } from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AnimateOnScroll from "../../components/AnimateOnScroll/AnimateOnScroll";
export default function Testimonials({ testimonials }) {
  return (
    <section
      id="depoimentos"
      className="bg-brand-dark text-white px-4 lg:px-8 py-20 relative overflow-hidden scroll-mt-16"
    >
      {/* Luz difusa de fundo para quebrar a solidez do bloco escuro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(109,40,217,0.08),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Título Padronizado com Variante Dark */}
        <SectionTitle
          tag="Feedback"
          title="Quem Experimenta, Ama"
          subtitle="Veja o depoimento de quem já se rendeu à qualidade e cremosidade do nosso Açaí Premium."
          /* Se houver erro de sintaxe por conta do ponto e vírgula no objeto do parâmetro anterior, corrigido abaixo */
          center={true}
          dark={true}
        />

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between gap-6 hover:bg-white/[0.07] transition-colors duration-200"
            >
              {/* Comentário do Cliente */}
              <p className="italic text-stone-300 font-light leading-relaxed text-sm sm:text-base">
                "{testimonial.comment}"
              </p>

              {/* Identificação do Cliente e Estrelas */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-purple-300 font-medium tracking-wide">
                    {testimonial.role}
                  </p>
                </div>

                {/* Renderização dinâmica das estrelas baseada no rating */}
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
