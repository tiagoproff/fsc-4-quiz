<a id="readme-top"></a>
<img src="./public/assets/avatar/skeleton.png" alt="Avatar" height="200" align="right">

<div align="left">
  <h3>FSC SHOW -Quiz (React + Vite + Pixi.js)</h3>
  <p>A quiz inspired by <strong>Show do Milhão</strong>, developed in <strong>React</strong> + <strong>TypeScript</strong> + <strong>Vite</strong>, with avatar in <strong>Pixi.js v8</strong> and data stored in <strong>LocalStorage</strong>.  
  Questions are loaded dynamically according to category and difficulty level.</p>
</div>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pixi.js](https://img.shields.io/badge/Pixi.js-DC1B6E?style=for-the-badge&logo=pixijs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

<p>Read on:
  <a align="right" href="./README-ptBR.md">portuguese 🇧🇷</a>
</p>

---

### 📂 Structure

```
src/
├─ assets/→ Images and logo
├─ components/→ Screens and components (Loading, Menu, Game, Avatar, etc.)
├─ date/
│ ├─ manisfest.json → Contains categories and levels
│ └─ questions/{category}/{level}.json
├─ hooks/→ Custom hooks (useLocalStorage)
├─ utils/→ Utility functions (e.g. shuffleArray)
├─ App.tsx → Route/screen control
├─ main.tsx → Entry point
└─ index.css → Global styles
```

---

### ⚙️ Features

- **Animated loading screen**
- **acceptance of terms screen**
- **Main menu** with bottom navigation
- **Game screen with timer, avatar and questions**
- **Victory and defeat** screens
- **Score saved in LocalStorage**
- **Dynamic loading** of questions (`import()`)

---

### 🧩 Technologies

- React + TypeScript + Vite
- Pixi.js v8
- LocalStorage
- SASS/Tailwind (optional)

---

### 🚀 Running the project

```bash
npm install
npm run dev

Access at:
👉 http://localhost:5173

➕ How to add new questions

Create a new directory at src/data/questions/{category}/

Add the files:

easy.json
medium.json
hard.json

Update categories in manifest.json with the new category name and slug.

New questions will be loaded automatically when selected.
```

#### Adjustments and improvements

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas para as seguintes tarefas:

- [x] Add Avatar in Pixi.js
- [x] Add Splash
- [x] Add Main Screen
- [ ] Fix team display
- [ ] Persist terms
- [ ] Persist data in LocalStorage

<details>
<summary>...</summary>

- [ ] Add help, signs
- [ ] Add tags: make mistakes, stop, hit
- [ ] Add university students
- [ ] Add avatar animations
- [ ] Add audios
- [ ] Update congratulations screen
- [ ] To add
- [ ] Add new categories
- [ ] Add rank
- [ ] Add logo

</details>

### Contributors

I thank everyone who made this project real! 🙏

<table>
  <tr>
    <td align="center">
        <img src="./src/assets/contributors/maurice-moss.png" width="60px;" alt="Photo of Maurice Moss"/>
    </td>
    <td align="center">
        <img src="./src/assets/contributors/jimmy-o-yang.png" width="60px;" alt="Photo of Jimmy O. Yang"/>
    </td>
    <td align="center">
        <img src="./src/assets/contributors/howard-wolowitz.png" width="60px;" alt="Photo of Howard Wolowitz"/>
    </td>
  </tr>
</table>

### 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

<p align="right"><a href="#readme-top">☝️</a></p>
