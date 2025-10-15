import { useEffect, useMemo, useState } from "react";
import PixiAvatar from "./PixiAvatar";

import useLocalStorage from "../hooks/useLocalStorage";
import shuffleArray from "../utils/shuffleArray";
import { loadQuestions } from "../utils/loadQuestions";

import type { Question } from "../interfaces/types";

interface GameScreenProps {
  readonly onWin: (earned: number) => void;
  readonly onLose: (earned: number) => void;
}

//const MAX_QUESTIONS = 10;
const MAX_TIME = 40;
const questionsData = await loadQuestions("javascript", "easy");

export default function GameScreen({ onWin, onLose }: GameScreenProps) {
  const [savedScore, setSavedScore] = useLocalStorage("score", 0);
  const questionsShuffled = useMemo(
    () => shuffleArray<Question>(questionsData as Question[]),
    []
  );
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(MAX_TIME);
  const [avatarStatus, setAvatarStatus] = useState<"neutral" | "happy" | "sad">(
    "neutral"
  );
  const [disableAnswers, setDisableAnswers] = useState(false);

  useEffect(() => {
    console.log("Questions Shuffled:", questionsShuffled);
    setTimer(MAX_TIME);
    setDisableAnswers(false);
    setAvatarStatus("neutral");
  }, [index, questionsShuffled]);

  useEffect(() => {
    if (timer <= 0) {
      const earned = Math.floor(savedScore);

      onLose(earned);
      return;
    }

    const startTimer = setInterval(
      () => setTimer((lastTimer) => lastTimer - 1),
      1000
    );

    return () => clearInterval(startTimer);
  }, [timer, onLose, savedScore]);

  const handleAnswer = (responseCorrect: string) => {
    if (disableAnswers) return;

    setDisableAnswers(true);

    const currentQuestion = questionsShuffled[index];

    if (responseCorrect === currentQuestion.answer) {
      const newScore = (savedScore || 0) + 1000;

      setAvatarStatus("happy");
      setSavedScore(newScore);
      setTimeout(() => {
        const fineshed = index + 1 >= questionsShuffled.length;

        if (fineshed) {
          const earned = Math.floor(newScore);

          setSavedScore(0);
          onWin(earned);
        } else {
          setIndex(index + 1);
        }
      }, 900);
    } else {
      const earned = Math.floor(savedScore);

      setAvatarStatus("sad");
      setSavedScore(0);
      setTimeout(() => onLose(earned), 800);
    }
  };

  const currentQuestion = questionsShuffled[index];
  const score = Math.floor(savedScore);

  return (
    <div className="screen column-between">
      <header className="topbar">
        <div>Tempo: {timer}s</div>
        <div>Prêmio: R$ {score}</div>
      </header>

      <main className="center-column">
        <PixiAvatar status={avatarStatus} />
        <div className="question-card">
          <h2>{currentQuestion.question}</h2>
          <pre>{currentQuestion.code}</pre>
          <div className="options">
            {currentQuestion.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                disabled={disableAnswers}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="tip">Dica: {currentQuestion.tip}</p>
        </div>
      </main>

      <footer className="bottombar">
        <button
          onClick={() => {
            setIndex((prev) => Math.max(0, prev - 1));
          }}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setIndex((prev) =>
              Math.min(questionsShuffled.length - 1, prev + 1)
            );
          }}
        >
          Próxima
        </button>
      </footer>
    </div>
  );
}
