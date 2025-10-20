import manifest from "../data/manifest.json";

import mascot from "../assets/main-mascot-md.png";
import light from "../assets/main-bg-light-md.png";

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
        <img src={mascot} alt="Mascote FSC" className="main-mascot" />
        <a
          href="#"
          aria-type="button"
          className="main-button"
          onClick={onStart}
        >
          Jogar
        </a>
      </main>
      <img src={light} alt="Luz" className="main-light" />
    </div>
  );
}
