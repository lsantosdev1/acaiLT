# 🍧 Açaí Premium - Delivery Landing Page

Uma Landing Page premium e totalmente responsiva desenvolvida para o segmento de delivery de açaí. O projeto funciona como um aplicativo de página única (SPA) de alta conversão, integrando um fluxo completo de seleção, customização de adicionais, regras de cupons e inteligência de frete com fechamento direto no WhatsApp.

---

## 🚀 Funcionalidades de Destaque

- **⚡ Arquitetura Reativa de Componentes:** Estrutura organizada utilizando a convenção de _Named Files_ (`Pasta/Componente.jsx`), facilitando a escalabilidade e manutenção do código.
- **🎨 Experiência Visual Fluida (UX Premium):** Animações de entrada e rolagem em cascata controladas via **Framer Motion**, garantindo interações suaves estilo startup.
- **🍫 Modal de Personalização Dinâmico:** O usuário pode gerenciar os adicionais do seu copo de açaí diretamente em um modal antes de enviá-lo ao carrinho, respeitando limites de negócio (ex: máximo de 3 adicionais).
- **🛒 Inteligência Financeira no Carrinho:** \* Cálculo de taxa de entrega dinâmico baseado no bairro selecionado.
  - Validação e aplicação de cupons de desconto (`PRIMEIRACOMPRA` ou `ACAITOP`) com cálculo reativo do subtotal e total geral.
  - Controle de duplicação: agrupa itens iguais no carrinho apenas se eles possuírem as mesmas customizações de adicionais.
- **🕒 Status de Funcionamento Automatizado:** O sistema lê o horário e dia atual da máquina do cliente. Caso o estabelecimento esteja fechado, uma barra informativa é exibida no topo e o botão de finalização do carrinho é bloqueado temporariamente.
- **💬 Integração de Checkout nativa:** Formata de maneira cirúrgica o pedido completo (com quantidades, adicionais escolhidos, bairro e valores) e redireciona o cliente para o WhatsApp da loja com um clique.

---

## 🛠️ Tecnologias Utilizadas

- **React 18+** (Hooks, gerenciamento de estado declarativo)
- **Vite** (Ambiente de desenvolvimento rápido e bundling otimizado)
- **Tailwind CSS v4** (Estilização moderna através de utilitários rápidos)
- **Framer Motion** (Engine de animações fluidas baseadas em viewport)
- **Lucide React** (Pacote de ícones minimalistas e modernos)

---

## 📂 Estrutura de Pastas do Projeto

```text
src/
├── components/               # Componentes globais e reutilizáveis
│   ├── AnimateOnScroll/      # Componente utilitário do Framer Motion
│   ├── CustomizationModal/   # Modal de montagem do açaí
│   ├── ProductCard/          # Card de exibição do produto
│   └── SectionTitle/         # Título padrão das seções
├── data/
│   └── menuData.js           # Banco de dados estático (produtos, bairros, cupons)
├── sections/                 # Seções que compõem a Landing Page
│   ├── About/
│   ├── Footer/
│   ├── Hero/
│   ├── Menu/                 # Cardápio com filtros de categoria
│   ├── Navbar/
│   ├── Promo/
│   └── Testimonials/
├── App.jsx                   # Maestro da aplicação (Estados Globais e Carrinho)
├── index.css                 # Configurações globais do Tailwind
└── main.jsx                  # Ponto de entrada do React no DOM

📦 Como Rodar o Projeto Localmente
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
Acesse a pasta da raiz:

Bash
cd seu-repositorio
Instale as dependências do ecossistema:

Bash
npm install
Inicie o servidor de desenvolvimento do Vite:

Bash
npm run dev
Abra o seu navegador no endereço indicado pelo terminal (geralmente http://localhost:5173).

🌐 Deploy na Vercel
Este projeto está configurado para deploy contínuo e otimizado na Vercel. Devido ao uso de links diretos estáveis de CDN para as imagens e ícones do Lucide, a aplicação mantém 100% de consistência visual e performance em ambiente de produção sem a necessidade de armazenamento local de assets pesados.
```
