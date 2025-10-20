import manifest from "../data/manifest.json";

import style from "./mainScreen.module.scss";

interface MainScreenProps {
  readonly onStart: () => void;
  readonly score: number;
}

export default function MainScreen({ onStart, score }: MainScreenProps) {
  manifest.categories.forEach((category) => {
    manifest.levels.forEach((level) => {
      console.log(`Category: ${category.name}, Level: ${level.name}`);
    });
  });

  return (
    <div className={style.main}>
      <header className="top-bar">
        <div>💰 {score}</div>
        <div>Usuário</div>
        <div>⚙️</div>
      </header>

      <main className="content">
        <h1>Show do Milhão (MVP)</h1>
        <img src="/logo.png" alt="logo" />
        <a
          href="#"
          aria-type="button"
          className="main-button"
          onClick={onStart}
        >
          Jogar
        </a>
      </main>

      <nav className="bottom-bar">
        <button>Ligas</button>
        <button>Camarim</button>
        <button>Loja</button>
      </nav>
    </div>
  );
}
