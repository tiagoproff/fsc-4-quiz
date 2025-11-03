import { useEffect, useMemo, useState } from "react";
import PixiAvatar from "./PixiAvatar";

import useLocalStorage from "../hooks/useLocalStorage";
import shuffleArray from "../utils/shuffleArray";
import { loadQuestions } from "../utils/loadQuestions";

import type { Question } from "../interfaces/types";

import styles from "./gameScreen.module.scss";
import CountDown from "./CountDown";

interface GameScreenProps {
  readonly onWin: (earned: number) => void;
  readonly onLose: (earned: number) => void;
}

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
    <div className={styles.game}>
      <div className="question">
        <h2>{currentQuestion.question}</h2>
        <pre>{currentQuestion.code}</pre>
        <div className="question-alternatives">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              className="question-alternative"
              key={optionIndex}
              disabled={disableAnswers}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <p className="question-tip">Dica: {currentQuestion.tip}</p>

        <footer className="bottombar">
          <button
            onClick={() => {
              console.log("Pular");
            }}
          >
            Pular
          </button>
          <button
            onClick={() => {
              console.log("Cartas");
            }}
          >
            Cartas
          </button>
        </footer>
      </div>
      <div className="aside">
        <div className="aside-topbar">
          <div className="score">{score}</div>
          <div className="countdown">
            <CountDown currentTimer={timer} totalTimer={MAX_TIME} />
          </div>
        </div>
        <PixiAvatar className="avatar" status={avatarStatus} />
      </div>
    </div>
  );
}
