# Svelte Learning - Meu Primeiro Projeto em Svelte 5 & SvelteKit

Este é um mini-projeto focado em explorar os fundamentos e os mais recentes recursos do **Svelte 5** e do **SvelteKit**. O objetivo principal desta base de código é servir como um material de referência e de estudos práticos durante meu aprendizado inicial.

## 📚 O que foi estudado / implementado

Durante o desenvolvimento deste projeto, várias funcionalidades essenciais foram exploradas em pastas, rotas e componentes seccionados para facilitar a fixação do conhecimento:

### 1. Svelte 5 Runes (Nova Reatividade)

- **`$state()`**: Gerenciamento de estado local moderno, sem as antigas declarações de variável padrão.
- **`$derived()`**: Criação de dados derivados de forma reativa e otimizada.
- **`$props()`**: Passagem e tipagem de propriedades eficientes entre diferentes componentes.

### 2. Lógica de Template e Ciclo de Vida

- **Blocos lógicos `{#if}` e `{#each}`**: Utilizados para renderização condicional de conteúdo e iteração das listas de projetos no Front-end.
- **`onMount`**: Controle e execução de lógica no momento de inicialização e montagem dos componentes no DOM.

### 3. Recursos Avançados do SvelteKit

- **Server-Side Rendering e Data Fetching**: Utilização do arquivo `+page.server.js` para carregamento de dados no servidor antes de entregar a página ao cliente.
- **Server Form Actions**: Manipulação nativa e progressiva de envio de formulários (como a simulação de adicionar um novo projeto) através de inputs disparando chamadas limpas `POST`.
- **Roteamento Dinâmico**: Organização do projeto através do sistema de arquivos para criar sub-páginas (como `/sobre`).
- **Rotas de API**: Estruturação de APIs backend internamente vinculadas ao front-end na pasta `/api`.

### 4. Componentização

- Criação de módulos reutilizáveis de interface como `RouterCard.svelte` e `ProjectCard.svelte`.
- Estudo de extração e injeção de dados utilizando estado global configurado no arquivo `config.svelte.js`.

---

## 🛠️ Tecnologias Utilizadas

- **Svelte 5** - View View & Runes Engine
- **SvelteKit** - Meta-framework Web Fullstack
- **Vite** - Bundler e Dev Server super-rápido
- **Tailwind CSS** - Framework de utilitários CSS para estilização (integrado ao Vite)
- **Node.js** - Ambiente de Execução Javascript do Servidor

---

## 🚦 Como rodar o projeto localmente

Para explorar ou rodar esta aplicação em sua máquina localmente:

1. **Clone o repositório do Github:**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd svelte-learning/svelte-1
   ```

2. **Instale as dependências com NPM:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. Acesse em seu navegador a URL apontada no terminal, que geralmente será: [http://localhost:5173/](http://localhost:5173/)

---

## ⚙️ Configurações de Ambientação e Gitignore

O repositório já conta com um arquivo `.gitignore` enxuto e configurado especificamente para as necessidades do ambiente Node.js / Vite / SvelteKit. Ele já impede automaticamente o upload de:

- A pesada pasta `node_modules/`
- Arquivos sensíveis criados via `.env` ou `.env.*`
- Diretórios de build finalísticos e arquivos temporários de compilação como `/.svelte-kit` e `/build`.

---

_Projeto desenvolvido como aprendizado prático e evolução de front-end / full-stack._
