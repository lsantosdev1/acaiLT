// src/components/Button.jsx
import React from "react";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  // Definição das classes base para garantir microinterações consistentes
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-xl transition-all duration-200 active:scale-98 text-center cursor-pointer text-sm sm:text-base tracking-wide";

  // Variações de estilo utilizando o novo tema v4 configurado no css
  const variants = {
    primary:
      "bg-gradient-to-r from-brand-purple to-purple-600 text-white shadow-lg shadow-brand-purple/20 hover:opacity-95",
    secondary:
      "bg-white/10 hover:bg-white/15 border border-white/20 text-white",
    accent:
      "bg-brand-accent hover:bg-emerald-600 text-white shadow-lg shadow-brand-accent/20",
    outline:
      "bg-white text-stone-700 hover:bg-stone-50 border border-stone-200 shadow-xs",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
