// src/components/AnimateOnScroll/index.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AnimateOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}) {
  // Configuração dos eixos baseado na direção
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initialVariant = {
    opacity: 0,
    ...directions[direction],
  };

  const animateVariant = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring", // Efeito mola para ficar mais natural e "Startup"
      stiffness: 100,
      damping: 15,
      delay: delay, // Delay para animações em cascata
      duration: duration,
    },
  };

  return (
    <motion.div
      className={className}
      initial={initialVariant}
      whileInView={animateVariant} // Anima quando entra na tela
      viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez, quando 20% estiver visível
    >
      {children}
    </motion.div>
  );
}
