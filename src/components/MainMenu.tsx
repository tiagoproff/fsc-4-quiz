import style from "./mainMenu.module.css";

interface MainMenuProps {
  readonly onStart: () => void;
  readonly score: number;
}

export default function MainMenu({ onStart, score }: MainMenuProps) {
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
