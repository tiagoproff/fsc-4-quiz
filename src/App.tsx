import { useState, type JSX } from "react";

import LoadingScreen from "./components/LoadingScreen";
import TermsScreen from "./components/TermsScreen";
import SplashScreen from "./components/SplashScreen";
import MainScreen from "./components/MainScreen";
import GameScreen from "./components/GameScreen";
import WinScreen from "./components/WinScreen";
import LooseScreen from "./components/LooseScreen";

import "./App.css";

function App() {
  const [stage, setStage] = useState<
    | "loading"
    | "terms"
    | "splash"
    | "main"
    | "game"
    | "settings"
    | "win"
    | "lose"
  >("loading");
  const [accepted, setAccepted] = useState(false);
  const [score, setScore] = useState(0);

  const handlers = {
    onAccept: () => {
      setAccepted(true);
      setStage("splash");
      setTimeout(() => setStage("main"), 1400);
    },
    onStart: () => setStage("game"),
    onWin: () => {
      setScore((s) => s + 1);
      setStage("win");
    },
    onLose: () => setStage("lose"),
    onRestart: () => setStage("main"),
    onConfig: () => setStage("settings"),
  };

  const screens: Record<string, JSX.Element> = {
    loading: <LoadingScreen onRestart={() => setStage("terms")} />,
    terms: <TermsScreen onAccept={handlers.onAccept} />,
    splash: <SplashScreen onRestart={() => setStage("main")} />,
    main: <MainScreen onStart={handlers.onStart} score={score} />,
    game: <GameScreen onWin={handlers.onWin} onLose={handlers.onLose} />,
    win: <WinScreen onRestart={handlers.onRestart} score={score} />,
    lose: <LooseScreen onRestart={handlers.onRestart} />,
  };

  if (stage === "terms" && accepted) {
    setStage("splash");
  }

  return screens[stage] ?? null;
}

export default App;
