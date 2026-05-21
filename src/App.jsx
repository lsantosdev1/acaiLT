// src/App.jsx
import React, { useState } from "react";
import { ShoppingBag, X, Phone, Ticket, Truck, Clock } from "lucide-react";

// Importação dos dados estáticos completos
import {
  products,
  menuCategories,
  testimonials,
  deliveryNeighborhoods,
  activeCoupons,
} from "./data/menuData";

// Importação das seções estruturais
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Promo from "./sections/Promo/Promo";
import Menu from "./sections/Menu/Menu";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Footer from "./sections/Footer/Footer";

// Importação do Modal de Customização
import CustomizationModal from "./components/CustomizationModal/CustomizationModal";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Estados das Funcionalidades de Negócio e Conversão
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("");
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // INTELIGÊNCIA: Verificação de Horário de Funcionamento (Aberto / Fechado)
  const checkIfStoreIsOpen = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Domingo, 1 = Segunda, 2 = Terça, ..., 6 = Sábado
    const currentHour = now.getHours();

    const OPEN_HOUR = 14; // Abre às 14:00
    const CLOSE_HOUR = 22; // Fecha às 22:00

    // Se for Segunda-feira (1), a loja está fechada o dia todo
    if (currentDay === 1) return false;

    // Verifica se a hora atual está dentro do intervalo permitido
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      return true;
    }

    return false;
  };

  const isStoreOpen = checkIfStoreIsOpen();

  // Filtro de produtos para o cardápio principal
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Intercepta o clique para abrir o Modal de Customização primeiro
  const handleOpenCustomization = (product) => {
    setSelectedProductForModal(product);
  };

  // Salva o produto customizado dentro do carrinho de compras
  const handleConfirmCustomization = (product, toppings) => {
    setCart((prevCart) => {
      const toppingsKey = toppings.sort().join(",");
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.toppings.sort().join(",") === toppingsKey,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id &&
          item.toppings.sort().join(",") === toppingsKey
            ? { ...item, qty: item.qty + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, qty: 1, toppings }];
    });

    setSelectedProductForModal(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleApplyCoupon = () => {
    setCouponError("");
    const cleanedCode = couponInput.trim().toUpperCase();

    if (!cleanedCode) return;

    if (activeCoupons[cleanedCode]) {
      setAppliedCoupon({
        code: cleanedCode,
        ...activeCoupons[cleanedCode],
      });
    } else {
      setCouponError("Cupom inválido ou expirado.");
      setAppliedCoupon(null);
    }
  };

  // Cálculos do Carrinho
  const itemsSubtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const selectedNeighborhoodData = deliveryNeighborhoods.find(
    (n) => n.id === selectedNeighborhood,
  );
  const deliveryFee = selectedNeighborhoodData
    ? selectedNeighborhoodData.fee
    : 0;

  let discountValue = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === "percentage") {
      discountValue = itemsSubtotal * (appliedCoupon.value / 100);
    } else if (appliedCoupon.type === "fixed") {
      discountValue = Math.min(appliedCoupon.value, itemsSubtotal);
    }
  }

  const finalCartTotal = Math.max(
    0,
    itemsSubtotal + deliveryFee - discountValue,
  );

  const handleCheckoutWhatsApp = () => {
    if (!selectedNeighborhood) {
      alert(
        "Por favor, selecione o seu bairro para entrega antes de finalizar.",
      );
      return;
    }

    const titleText = `*Novo Pedido Açaí Premium* 🚀%0A%0A`;
    const itemsText = cart
      .map((item) => {
        const toppingsString =
          item.toppings.length > 0
            ? `%0A   _Adicionais: ${item.toppings.join(", ")}_`
            : `%0A   _Adicionais: Sem adicionais_`;
        return `• *${item.qty}x ${item.name}* - R$ ${(item.price * item.qty).toFixed(2).replace(".", ",")}${toppingsString}`;
      })
      .join("%0A%0A");

    const neighborhoodText = `%0A%0A📍 *Entrega em:* ${selectedNeighborhoodData.name}`;
    const financialText = `%0A------------------------%0A*Subtotal:* R$ ${itemsSubtotal.toFixed(2).replace(".", ",")}%0A*Taxa de Entrega:* R$ ${deliveryFee.toFixed(2).replace(".", ",")}${appliedCoupon ? `%0A*Cupom (${appliedCoupon.code}):* -R$ ${discountValue.toFixed(2).replace(".", ",")}` : ""}%0A*Total Geral: R$ ${finalCartTotal.toFixed(2).replace(".", ",")}*`;

    const message = `${titleText}${itemsText}${neighborhoodText}${financialText}`;
    window.open(`https://wa.me/5521999999999?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased selection:bg-brand-purple selection:text-white">
      {/* BANNER DINÂMICO DE AVISO (Aparece no topo apenas se a loja estiver fechada) */}
      {!isStoreOpen && (
        <div className="bg-amber-500 text-brand-dark px-4 py-2 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2 tracking-wide border-b border-amber-600/20 sticky top-0 z-50 animate-in slide-in-from-top duration-300">
          <Clock size={16} /> Horário de atendimento encerrado! Abriremos de
          Terça a Domingo, das 14h às 22h. Você ainda pode montar seu carrinho.
        </div>
      )}

      {/* 1. Header / Navegação */}
      <Navbar
        cartItemCount={cartItemCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Promoções (Combos) */}
      <Promo products={products} onAddToCart={handleOpenCustomization} />

      {/* 4. Cardápio Reativo */}
      <Menu
        products={filteredProducts}
        categories={menuCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={handleOpenCustomization}
      />

      {/* 5. Institucional / Sobre */}
      <About />

      {/* 6. Depoimentos */}
      <Testimonials testimonials={testimonials} />

      {/* 7. Rodapé */}
      <Footer />

      {/* MODAL GLOBAL DE CUSTOMIZAÇÃO */}
      {selectedProductForModal && (
        <CustomizationModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onConfirm={handleConfirmCustomization}
        />
      )}

      {/* COMPONENTE: Carrinho Lateral */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-200">
            <div className="p-6 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-purple" size={22} />
                <h3 className="font-bold text-lg text-stone-900">Seu Pedido</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 divide-y divide-stone-100">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3 text-stone-400">
                  <ShoppingBag size={48} className="stroke-1 text-stone-300" />
                  <p className="text-sm font-light">
                    Seu carrinho está vazio.
                    <br />
                    Adicione itens do nosso cardápio!
                  </p>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="py-4 flex flex-col gap-1 first:pt-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-stone-900 text-sm">
                          {item.qty}x {item.name}
                        </h4>
                        <span className="font-black text-sm text-stone-900">
                          R${" "}
                          {(item.price * item.qty).toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-xs font-semibold text-red-500 hover:text-red-700 hover:underline cursor-pointer"
                      >
                        Remover
                      </button>
                    </div>
                    {item.toppings && item.toppings.length > 0 && (
                      <p className="text-xs text-stone-500 font-light leading-relaxed">
                        + {item.toppings.join(", ")}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4 shadow-inner">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide flex items-center gap-1">
                    <Truck size={14} /> Selecione o Bairro de Entrega
                  </label>
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full p-3 rounded-xl border border-stone-200 bg-white text-sm font-semibold text-stone-700 focus:border-brand-purple outline-none cursor-pointer"
                  >
                    <option value="">Escolha uma região...</option>
                    {deliveryNeighborhoods.map((neighborhood) => (
                      <option key={neighborhood.id} value={neighborhood.id}>
                        {neighborhood.name} (+ R${" "}
                        {neighborhood.fee.toFixed(2).replace(".", ",")})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wide flex items-center gap-1">
                    <Ticket size={14} /> Possui um Cupom?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Ex: PRIMEIRACOMPRA"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-bold uppercase tracking-wide placeholder:normal-case placeholder:font-normal focus:border-brand-purple outline-none"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2.5 bg-brand-dark hover:bg-brand-purple text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Aplicar
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-xs text-red-500 font-medium">
                      {couponError}
                    </p>
                  )}
                  {appliedCoupon && (
                    <p className="text-xs text-brand-accent font-bold">
                      ✓ Cupom {appliedCoupon.code} aplicado (-
                      {appliedCoupon.type === "percentage"
                        ? `${appliedCoupon.value}%`
                        : `R$ ${appliedCoupon.value}`}
                      )
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-stone-200/60 space-y-1.5 text-sm text-stone-600 font-medium">
                  <div className="flex justify-between">
                    <span>Subtotal dos itens</span>
                    <span>R$ {itemsSubtotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de entrega</span>
                    <span>
                      {deliveryFee > 0
                        ? `R$ ${deliveryFee.toFixed(2).replace(".", ",")}`
                        : "R$ 0,00"}
                    </span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-brand-accent font-bold">
                      <span>Desconto cupom</span>
                      <span>
                        - R$ {discountValue.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-stone-900 pt-2 border-t border-stone-200">
                    <span className="font-bold text-base">Total Geral</span>
                    <span className="text-2xl font-black text-brand-dark">
                      R$ {finalCartTotal.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>

                {/* MODIFICAÇÃO DE CONVERSÃO: Desativa o botão e altera o texto caso esteja fechado */}
                <button
                  onClick={handleCheckoutWhatsApp}
                  disabled={!isStoreOpen}
                  className={`w-full py-4 font-bold rounded-xl transition-colors duration-200 shadow-lg flex items-center justify-center gap-2 active:scale-98 ${
                    isStoreOpen
                      ? "bg-brand-accent hover:bg-emerald-600 text-white shadow-brand-accent/10 cursor-pointer"
                      : "bg-stone-300 text-stone-500 shadow-none cursor-not-allowed"
                  }`}
                >
                  <Phone size={18} />{" "}
                  {isStoreOpen
                    ? "Enviar Pedido Customizado"
                    : "Loja Fechada no Momento"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
