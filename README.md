<div style="display: flex; justify-content: space-between; align-items: center">
  <div style="position: relative;">
    <h1>SHOW do FSC - Quiz (React + Vite + Pixi.js)</h1>
    <p>Um quiz inspirado no <strong>Show do Milhão</strong>, desenvolvido em <strong>React</strong> + <strong>TypeScript</strong> + <strong>Vite</strong>, com avatar em <strong>Pixi.js v8</strong> e dados armazenados no <strong>LocalStorage</strong>.  
    As perguntas são carregadas dinamicamente conforme categoria e nível de dificuldade.</p>
  </div>
  <img src="public/assets/avatar/skeleton.png" alt="Avatar" height="200" style="padding: 0 0 16px 16px;">
</div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pixi.js](https://img.shields.io/badge/Pixi.js-DC1B6E?style=for-the-badge&logo=pixijs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## 📂 Estrutura

src/
├─ assets/ → Imagens e logo
├─ components/ → Telas e componentes (Loading, Menu, Game, Avatar etc.)
├─ data/
│ ├─ manisfest.json → Contém categorias e levels
│ └─ questions/{categoria}/{nível}.json
├─ hooks/ → Hooks personalizados (useLocalStorage)
├─ utils/ → Funções utilitárias (ex: shuffleArray)
├─ App.tsx → Controle de rotas/telas
├─ main.tsx → Ponto de entrada
└─ index.css → Estilos globais

---

## ⚙️ Funcionalidades

- Tela de **loading animado**
- Tela de **aceite de termos**
- **Menu principal** com navegação inferior
- Tela de **jogo com timer, avatar e perguntas**
- Telas de **vitória e derrota**
- **Pontuação salva no LocalStorage**
- **Carregamento dinâmico** das perguntas (`import()`)

---

## 🧩 Tecnologias

- React + TypeScript + Vite
- Pixi.js v8
- LocalStorage
- SASS/Tailwind (opcional)

---

## 🚀 Rodando o projeto

```bash
npm install
npm run dev

Acesse em:
👉 http://localhost:5173

➕ Como adicionar novas perguntas

Crie um novo diretório em src/data/questions/{categoria}/

Adicione os arquivos:

easy.json
medium.json
hard.json

Atualize categories em manisfest.json com o nome e slug da nova categoria.

As novas perguntas serão carregadas automaticamente quando selecionadas.
```
