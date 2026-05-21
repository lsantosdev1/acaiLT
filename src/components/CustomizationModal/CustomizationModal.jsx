// src/components/CustomizationModal/CustomizationModal.jsx
import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { availableToppings } from "../../data/menuData";

export default function CustomizationModal({ product, onClose, onConfirm }) {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const maxToppings = 3;

  const handleToggleTopping = (toppingName) => {
    setSelectedToppings((prev) => {
      if (prev.includes(toppingName)) {
        return prev.filter((name) => name !== toppingName);
      }
      if (prev.length < maxToppings) {
        return [...prev, toppingName];
      }
      return prev; // Bloqueia se estourar o limite de 3
    });
  };

  const handleSave = () => {
    onConfirm(product, selectedToppings);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Escuro */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Janela do Modal */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Topo do Modal com Nova Imagem Vibrante */}
        <div className="relative h-32 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605663738531-15570889f816?q=80&w=800&auto=format&fit=crop"
            alt="Copos de Açaí Preparados"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
              Personalize seu copo
            </span>
            <h3 className="font-black text-xl text-white leading-tight">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-white/30 hover:bg-white/50 text-white rounded-xl transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Corpo / Opções de Adicionais */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <div className="flex justify-between items-center bg-purple-50 px-4 py-2.5 rounded-xl border border-purple-100">
            <span className="text-xs font-bold text-brand-purple uppercase tracking-wide">
              Adicionais Premium
            </span>
            <span className="text-xs font-medium text-purple-700">
              {selectedToppings.length} de {maxToppings} selecionados
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {availableToppings.map((topping) => {
              const isSelected = selectedToppings.includes(topping.name);
              const isMaxed =
                selectedToppings.length >= maxToppings && !isSelected;

              return (
                <button
                  key={topping.id}
                  disabled={isMaxed}
                  onClick={() => handleToggleTopping(topping.name)}
                  className={`flex items-center justify-between p-4 rounded-xl border text-left font-semibold transition-all duration-150 ${
                    isSelected
                      ? "border-brand-purple bg-brand-light text-brand-dark"
                      : isMaxed
                        ? "border-stone-100 bg-stone-50 text-stone-300 cursor-not-allowed"
                        : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 cursor-pointer"
                  }`}
                >
                  <span className="text-sm">{topping.name}</span>
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-brand-purple border-brand-purple text-white"
                        : "border-stone-300 bg-stone-50"
                    }`}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="p-6 border-t border-stone-100 bg-stone-50 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">
              Total do item
            </span>
            <span className="text-xl font-black text-brand-dark">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-brand-purple hover:bg-purple-700 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-brand-purple/10 cursor-pointer"
          >
            Adicionar ao Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
