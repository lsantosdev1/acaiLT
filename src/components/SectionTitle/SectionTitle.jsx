// src/components/SectionTitle.jsx
import React from "react";

export default function SectionTitle({
  tag,
  title,
  subtitle,
  center = true,
  dark = false,
}) {
  return (
    <div
      className={`space-y-3 max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}
    >
      {tag && (
        <span
          className={`inline-block text-xs sm:text-sm font-bold uppercase tracking-wider ${
            dark ? "text-purple-400" : "text-brand-purple"
          }`}
        >
          {tag}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl font-black tracking-tight ${
          dark ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed ${
            dark ? "text-stone-300" : "text-stone-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
