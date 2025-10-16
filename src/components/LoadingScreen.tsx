import { useEffect } from "react";

import style from "./loadingScreen.module.scss";

interface LoadingScreenProps {
  readonly onRestart: () => void;
}
export default function LoadingScreen({ onRestart }: LoadingScreenProps) {
  useEffect(() => {
    const t = setTimeout(onRestart, 3000);
    return () => clearTimeout(t);
  }, [onRestart]);

  return (
    <div className={style.loader}>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
      <span className="loader-item"></span>
    </div>
  );
}
