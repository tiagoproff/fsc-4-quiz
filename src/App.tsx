import { useState } from "react";

import MainMenu from "./components/MainMenu";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const onStart = () => {
    console.log("Game started");
  };

  const onWin = () => {
    setScore((s) => s + 1);
  };

  return <MainMenu onStart={onStart} score={score} />;
}

export default App;
