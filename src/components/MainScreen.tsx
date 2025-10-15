import manifest from "../data/manifest.json";

import style from "./mainScreen.module.css";

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
    <div className={style.root}>
      <header className="top-bar">
        <div>💰 {score}</div>
        <div>Usuário</div>
        <div>⚙️</div>
      </header>

      <main className={style.content}>
        <h1>Show do Milhão (MVP)</h1>
        <img src="/logo.png" alt="logo" />
        <button onClick={onStart}>Iniciar</button>
      </main>

      <nav className={style.bottomBar}>
        <button>Ligas</button>
        <button>Camarim</button>
        <button>Loja</button>
      </nav>
    </div>
  );
}
