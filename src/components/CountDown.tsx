import style from "./countDown.module.scss";

interface CountDownProps {
  readonly currentTimer?: number;
  readonly totalTimer?: number;
}

export default function CountDown({
  currentTimer = 0,
  totalTimer = 0,
}: CountDownProps) {
  const styleDinamic = {
    "--timer-progress": `${currentTimer / totalTimer}`,
  } as React.CSSProperties;

  return (
    <div className={style.countdown} style={styleDinamic}>
      <svg>
        <circle
          className="outline-countdown"
          r="50%"
          cx="50%"
          cy="50%"
        ></circle>
        <circle
          className="outline-countdown-progress"
          r="50%"
          cx="50%"
          cy="50%"
        ></circle>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          {currentTimer}
        </text>
      </svg>
    </div>
  );
}
